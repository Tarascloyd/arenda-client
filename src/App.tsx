import React, { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Page from './components/Page/Page';
import Welcome from './components/Welome/Welcome';
import {Outlet} from "react-router-dom";
import './App.css'

const App = ():JSX.Element => {
  
  return (
    <div className='App'>
        <Header/>
        <Outlet />
        <div className='footer'>Tars.com 2022</div>
    </div>  
  );
}

export default App;
