import React from 'react';
import './Header.css';
import AccountMenu from './Menu.js';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './Home.js';
import Students from './Students.js';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Avatar, MenuItem } from '@mui/material';



function Header() {
  return (
    <div className='header'>
      <nav className='navbar'>
        <a href='/Home'>Home</a>
        <a href='/Students'>Students</a>
        <a href='/Courses'>Courses</a>
        <a href='/Profile'>
          <MenuItem/>
          <span className='l2'>Login / Signup</span>
        </a>
      </nav>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Home" element={<Home/>}/>
          <Route path="/Students" element={<Students/>}/>
        </Routes>
      </Router>
    </div>
  )
}


export default Header;