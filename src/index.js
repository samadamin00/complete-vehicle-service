import React from "react";
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import AuthState from "./context/auth/state";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
    <AuthState>
      <App />
    </AuthState>
  </BrowserRouter>
</React.StrictMode>,
);

