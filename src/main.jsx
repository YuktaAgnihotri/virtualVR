
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AuthContext from './components/AuthContext.jsx'
import { HashRouter } from "react-router-dom";
createRoot(document.getElementById('root')).render(
  <HashRouter>
     <AuthContext>
   <App />
     </AuthContext>
  </HashRouter>
)
