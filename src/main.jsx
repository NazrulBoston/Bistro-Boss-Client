import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Router from './routes/Router.jsx'
import { HelmetProvider } from 'react-helmet-async';
import AuthProvider from './providers/AuthProvider.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <div className='w-11/12 mx-auto'>
          <Router></Router>
        </div>
      </HelmetProvider>
    </AuthProvider>
  </StrictMode>,
)
