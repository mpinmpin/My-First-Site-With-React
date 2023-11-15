import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/light-mode.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// useEffect rendering twice
// https://stackoverflow.com/questions/48846289/why-is-my-react-component-is-rendering-twice
// <React.StrictMode>
// <App />
// </React.StrictMode>,