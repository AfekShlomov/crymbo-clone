import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './src/scss/base/base.css';
import App from './src/pages/App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
