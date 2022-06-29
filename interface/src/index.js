import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import { store } from './store'
import axios from 'axios'

const root = ReactDOM.createRoot(document.getElementById('root'));
axios.defaults.baseURL = "https://git.heroku.com/shopping-checklist-backend.git/"

root.render(
   <Provider store={store}>
    <App />
  </Provider>
);

