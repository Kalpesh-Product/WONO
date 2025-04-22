import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import axios from "axios";

import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";

axios.defaults.baseURL = "http://localhost:5000";
// axios.defaults.baseURL = "https://wono-backend.vercel.app";
axios.defaults.withCredentials = true;

const root = ReactDOM.createRoot(document.getElementById("root"));

const useHideUnimportantErrors = () => {
  useEffect(() => {
    function hideError(e) {
      if (
        e.message ===
        "ResizeObserver loop completed with undelivered notifications."
      ) {
        const resizeObserverErrDiv = document.getElementById(
          "webpack-dev-server-client-overlay-div"
        );
        const resizeObserverErr = document.getElementById(
          "webpack-dev-server-client-overlay"
        );
        if (resizeObserverErr) {
          resizeObserverErr.setAttribute("style", "display: none");
        }
        if (resizeObserverErrDiv) {
          resizeObserverErrDiv.setAttribute("style", "display: none");
        }
      }
    }

    window.addEventListener("error", hideError);
    return () => {
      window.addEventListener("error", hideError);
    };
  }, []);
};
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GoogleOAuthProvider clientId="358669748567-d4e1dl47ic6patb61sidq0ipdvllb0bn.apps.googleusercontent.com">
        <App useHideUnimportantErrors={useHideUnimportantErrors} />
      </GoogleOAuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();
