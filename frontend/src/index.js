import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import axios from 'axios';

import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google';


// axios.defaults.baseURL = "http://localhost:5000";
axios.defaults.baseURL = "https://wono-backend.vercel.app";
axios.defaults.withCredentials = true;





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <GoogleOAuthProvider clientId="358669748567-d4e1dl47ic6patb61sidq0ipdvllb0bn.apps.googleusercontent.com">
    <App />
    </GoogleOAuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();
