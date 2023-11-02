import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Globlecss } from './component/styles/globle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Globlecss/> {/* Include your global styles here */}
    <App />
  </React.StrictMode>
  
);

