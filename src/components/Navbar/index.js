import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
         <NavLink to='/'>
          Jeremy Cornwall
        </NavLink> 
        <Bars />
        <NavMenu>
          <NavLink to='/about' activeStyle>
            About
          </NavLink>
          <NavLink to='/photos' activeStyle>
            Photos
          </NavLink>
          <NavLink to='/contact-me' activeStyle>
            Contact Me
          </NavLink>
          <NavLink to='/sign-up' activeStyle>
            Sign Up
          </NavLink>
         
        </NavMenu>
       
      </Nav>
    </>
  );
};

export default Navbar;
