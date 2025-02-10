import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Router from './routes/Router.jsx'
import { HelmetProvider } from 'react-helmet-async';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <div className='w-11/12 mx-auto'>
        <Router></Router>
      </div>
    </HelmetProvider>
  </StrictMode>,
)
