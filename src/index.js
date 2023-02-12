import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import BasicExample from './BasicExemple';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BasicExample/>
    <App />
  </React.StrictMode>
);






reportWebVitals();
