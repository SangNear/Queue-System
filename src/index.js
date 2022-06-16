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
import Service from './component/Service/Service';
import Table from './component/Device/TableDevice';
import AddDevice from './component/Device/AddDevice';
import DetailDevice from './component/Device/DetailDevice';
import UpdateDevice from './component/Device/UpdateDevice';
import DatePicker from './component/DatePicker/DatePicker';
import DatePickerComponent from './component/DatePicker/DatePicker';
import AddService from './component/Service/AddService';
import DetailService from './component/Service/DetailService'
import UpdateService from './component/Service/UpdateService';
import Number from './component/Number/Number'
import AddNumber from './component/Number/AddNumber';
import DetailNumber from './component/Number/DetailNumber';
import Report from './component/Report/Report';
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
        <Route path="/service" element={<Service/>} />
        <Route path="/datepicker" element={<DatePickerComponent/>} />
        <Route path="/addService" element={<AddService/>} />
        <Route path="/detailService" element={<DetailService/>} />
        <Route path="/updateService" element={<UpdateService/>} />
        <Route path="/number" element={<Number/>} />
        <Route path="/addNumber" element={<AddNumber/>} />
        <Route path="/detailNumber" element={<DetailNumber/>} />
        <Route path="/report" element={<Report/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
