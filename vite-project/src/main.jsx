import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import NameContexProvider from "./name-context.jsx";
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <NameContexProvider>
    <App />
  </NameContexProvider> 
  </BrowserRouter>
)