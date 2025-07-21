import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';      // <-- 1. IMPORT THE PROVIDER
import { store } from './app/store';           // <-- 2. IMPORT THE STORE
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* 3. WRAP YOUR APP COMPONENT WITH THE PROVIDER */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
