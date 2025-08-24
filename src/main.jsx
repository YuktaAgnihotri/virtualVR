
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {AuthContext} from './components/AuthContext.jsx'
import { HashRouter } from "react-router-dom";
createRoot(document.getElementById('root')).render(
  <HashRouter>
     <AuthProvider>
   <App />
     </AuthProvider>
  </HashRouter>
)
