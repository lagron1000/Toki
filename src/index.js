import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import Login from './Forms/Login';
// import Signup from './Forms/Signup';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  // <BrowserRouter>
  //   <Routes>
  //     <Route path="/" element={<App />} />
  //     <Route path="/login" element={<App />} />
  //     <Route path="signup" element={<Signup />} />
  //   </Routes>
  // </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
