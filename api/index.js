const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;
const FIREBASE_PROJECT_ID = process.env.FIREBASE_PROJECT_ID || 'virtualvr2-1ec16';

// Enable CORS for frontend local development and deployed same-origin requests
app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:3000'],
  credentials: true
}));
app.use(express.json());

// Google certificates cache for verifying Firebase JWTs
let googleCertsCache = null;
let certsExpiryTime = 0;

// Fetch Google's public certificates dynamically
async function getGooglePublicCerts() {
  const now = Date.now();
  if (googleCertsCache && now < certsExpiryTime) {
    return googleCertsCache;
  }

  const url = 'https://www.googleapis.com/robot/v1/metadata/x509/securetoken@system.gserviceaccount.com';
  const response = await axios.get(url);
  googleCertsCache = response.data;
  
  // Cache the certificates based on Max-Age header
  const cacheControl = response.headers['cache-control'] || '';
  const maxAgeMatch = cacheControl.match(/max-age=(\d+)/);
  const maxAge = maxAgeMatch ? parseInt(maxAgeMatch[1], 10) : 3600;
  certsExpiryTime = now + maxAge * 1000;
  
  return googleCertsCache;
}

// Verify signature and claims of the Firebase ID Token
async function verifyFirebaseToken(token) {
  const decodedToken = jwt.decode(token, { complete: true });
  if (!decodedToken || !decodedToken.header || !decodedToken.header.kid) {
    throw new Error('Invalid token structure or missing Key ID (kid)');
  }

  const kid = decodedToken.header.kid;
  const certs = await getGooglePublicCerts();
  const publicKey = certs[kid];
  
  if (!publicKey) {
    throw new Error('Public key not found for kid: ' + kid);
  }

  return new Promise((resolve, reject) => {
    jwt.verify(
      token,
      publicKey,
      {
        algorithms: ['RS256'],
        audience: FIREBASE_PROJECT_ID,
        issuer: `https://securetoken.google.com/${FIREBASE_PROJECT_ID}`
      },
      (err, decoded) => {
        if (err) reject(err);
        else resolve(decoded);
      }
    );
  });
}

// Authentication Middleware to protect routes
async function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Access token required' });
  }

  try {
    const decodedUser = await verifyFirebaseToken(token);
    req.user = decodedUser;
    next();
  } catch (error) {
    console.error('Authentication error:', error.message);
    return res.status(401).json({ error: 'Invalid or expired token', details: error.message });
  }
}

// Static require of prompts JSON file for reliability in serverless environments
const prompts = require('../src/constants/prompts.json');

// Route: Get all prompts (Protected)
app.get('/api/prompts', authenticateToken, (req, res) => {
  res.json(prompts);
});

// Route: Server Health Check
app.get('/api/health', (req, res) => {
  res.json({ status: 'healthy', projectId: FIREBASE_PROJECT_ID });
});

// Listen on port locally (only when run directly)
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Backend server running on http://localhost:${PORT}`);
  });
}

// Export Express app for Vercel Serverless Function runtime
module.exports = app;
