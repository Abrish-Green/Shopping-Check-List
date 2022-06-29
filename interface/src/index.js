import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import { store } from './store'
import axios from 'axios'

const root = ReactDOM.createRoot(document.getElementById('root'));
axios.defaults.baseURL = "http://localhost:4000/"

root.render(
   <Provider store={store}>
    <App />
  </Provider>
);

