import React from 'react';
import ReactDOM from 'react-dom/client'; //implitation of React
// import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


//React creates own DOM : Virtual DOM