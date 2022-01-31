import React from "react";
import "../Navbar/Navbar.css";
import Logo from "../images/logo.png";
import {FaBars, FaTimes } from  "react-icons/fa"

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='logo'>
        <img src={Logo} alt='bass-head' />
      </div>
      <ul className='nav-menu'>
        <li className='nav-item'>
          <a href='/'>Home</a>
        </li>
        <li className='nav-item'>
          <a href='/'>Photos</a>
        </li>
        <li className='nav-item'>
          <a href='/'>Touring</a>
        </li>
        <li className='nav-item'>
          <a href='/'>Projects</a>
        </li>
        <li className='nav-item'>
          <a href='/'>Contact</a>
        </li>
      </ul>
      <div className="hamburger">
          <FaBars size={30} style={{color: '#f8f8f8'}} />
      </div>
    </div>
  );
};

export default Navbar;
