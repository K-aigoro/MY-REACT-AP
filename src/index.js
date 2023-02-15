import React from 'react';
import ReactDOM from 'react-dom/client';
import Manager from './component/Contact manger/manager';
import Toggle from './component/toggler';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import Header from './component/Header';
// import App from './App';
import Test from './Test';



const contacts = ["James smith", "Aigoro Kazeem", "Yemi Ogunbiyi"];
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Manager data={contacts} />
    <Toggle />
    <Test />

  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
