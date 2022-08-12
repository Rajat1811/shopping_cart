import React from 'react'
import {createRoot} from 'react-dom/client'
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import Store from './Store';
import { Provider } from "react-redux";

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <Provider store= {Store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);