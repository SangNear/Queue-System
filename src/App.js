
import './App.scss';
import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.css"
import DashBoard from './component/DashBoard/DashBoard';
import OverView from './component/OverView/OverView';
import MenuBar from './component/MenuBar/MenuBar';



function App() {
  return (
    <React.Fragment>
      <div className='app'>
        <MenuBar/>
        <DashBoard/>

        
      </div>

    </React.Fragment>
  );
}

export default App;
