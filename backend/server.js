const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const jwt = require('jsonwebtoken');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;
const FIREBASE_PROJECT_ID = process.env.FIREBASE_PROJECT_ID || 'virtualvr2-1ec16';

app.use(cors());
app.use(express.json());

// Google certificates cache
let googleCertsCache = null;
let certsExpiryTime = 0;

async function getGooglePublicCerts() {
  const now = Date.now();
  if (googleCertsCache && now < certsExpiryTime) {
    return googleCertsCache;
  }

  const url = 'https://www.googleapis.com/robot/v1/metadata/x509/securetoken@system.gserviceaccount.com';
  const response = await axios.get(url);
  googleCertsCache = response.data;
  
  // Parse cache control max-age
  const cacheControl = response.headers['cache-control'] || '';
  const maxAgeMatch = cacheControl.match(/max-age=(\d+)/);
  const maxAge = maxAgeMatch ? parseInt(maxAgeMatch[1], 10) : 3600;
  certsExpiryTime = now + maxAge * 1000;
  
  return googleCertsCache;
}

function verifyWithKey(token, publicKey, projectId) {
  return new Promise((resolve, reject) => {
    jwt.verify(
      token,
      publicKey,
      {
        algorithms: ['RS256'],
        audience: projectId,
        issuer: `https://securetoken.google.com/${projectId}`
      },
      (err, decoded) => {
        if (err) {
          reject(err);
        } else {
          resolve(decoded);
        }
      }
    );
  });
}

async function verifyFirebaseToken(token, projectId) {
  const decodedToken = jwt.decode(token, { complete: true });
  if (!decodedToken || !decodedToken.header || !decodedToken.header.kid) {
    throw new Error('Invalid token structure or missing kid');
  }

  const kid = decodedToken.header.kid;
  const certs = await getGooglePublicCerts();
  const publicKey = certs[kid];
  
  if (!publicKey) {
    // Clear cache and try fetching again once
    googleCertsCache = null;
    const freshCerts = await getGooglePublicCerts();
    const freshKey = freshCerts[kid];
    if (!freshKey) {
      throw new Error(`Public key not found for kid: ${kid}`);
    }
    return verifyWithKey(token, freshKey, projectId);
  }

  return verifyWithKey(token, publicKey, projectId);
}

// Authentication Middleware
async function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Access token required' });
  }

  try {
    const decoded = await verifyFirebaseToken(token, FIREBASE_PROJECT_ID);
    req.user = decoded;
    next();
  } catch (error) {
    console.error('JWT verification failed:', error.message);
    return res.status(401).json({ error: 'Invalid or expired access token', details: error.message });
  }
}

const prompts = require('../src/constants/prompts.json');

// Route to fetch prompts - Protected by Firebase JWT middleware
app.get('/api/prompts', authenticateToken, (req, res) => {
  try {
    res.json(prompts);
  } catch (error) {
    console.error('Failed to get prompts:', error);
    res.status(500).json({ error: 'Internal server error reading prompts' });
  }
});

// Basic health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'healthy', firebaseProjectId: FIREBASE_PROJECT_ID });
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Backend server running on http://localhost:${PORT}`);
  });
}

module.exports = app;

