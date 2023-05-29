import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Route exact={true} path="/" component={App} /> 
    </BrowserRouter>
  </React.StrictMode>
);
