import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Forgot from './component/auth/Forgot';
import ResetPassword from './component/auth/ResetPassword';

import Login from './component/auth/Login';
import Profile from './component/Profile/Profile';
import Dashboard from './component/DashBoard/DashBoard';
import Device from './component/Device/Device';
import Table from './component/Device/TableDevice';
import AddDevice from './component/Device/AddDevice';
import DetailDevice from './component/Device/DetailDevice';
import UpdateDevice from './component/Device/UpdateDevice';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/reset" element={<ResetPassword />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/device" element={<Device />}>

        </Route>
        <Route path="addDevice" element={<AddDevice />}>

        </Route>
        <Route path="/updateDevice" element={<UpdateDevice/>} />
        <Route path="/detailDevice" element={<DetailDevice/>} />
        <Route path="/table" element={<Table />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
