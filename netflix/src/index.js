import React from 'react';
import ReactDOM from 'react-dom/client';
import Test from './components/Test';
import Test2 from './components/Test2';
import NewUser from './pages/Register/NewUser';
// import App from './App';
// import Home from "./pages/home/Home";

import Reg from './pages/Register/Reg';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Home/> */}
    {/* <App /> */}
    {/* <Reg/> */}
{/* <Test/> */}
<Test2/>
    {/* <NewUser/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
