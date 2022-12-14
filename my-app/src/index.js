import React from 'react';
import ReactDOM from 'react-dom/client';
import "../src/Assets/css/app.css";
import "../src/Assets/css/style.css";
import App from './App';
import {Provider} from "react-redux";
import store from "./Assets/Redux/store/Store";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Provider store={store}>
            <App />
      </Provider>
  </React.StrictMode>
);

