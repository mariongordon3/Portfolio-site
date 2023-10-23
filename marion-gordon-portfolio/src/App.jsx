import { useState,useEffect } from 'react'
import Navbar from './components/Navbar'
import { Outlet } from "react-router-dom";
function App() {
  return (
    <div className='displayPage'>
      <div className='sideBar'>
        <img src="dbz_shenron.gif" alt="shenron img" />
      </div>
      <div className='mainContent'>
        <Navbar />
        <Outlet />
      </div>
      <div className='sideBar'>
        <img src="dbz_shenron.gif" alt="shenron img" />
      </div>
    </div>
    
  )
}

export default App
