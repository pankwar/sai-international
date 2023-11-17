import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import  store  from './redux/store/store.jsx'
import axios from 'axios';

// axios.interceptors.request.use((request)=>{
//   console.log("request ", request);
//   // request.headers.Authorization = "bearer bdaskdhbarwesdhasbdsdaasid"
//   request.withCredentials = true;
//   return request;
// })

// axios.interceptors.response.use((response) =>{
//   console.log("response ", response);
//   return response;
// })
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
    <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
