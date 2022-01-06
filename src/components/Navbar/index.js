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
        {/* <NavLink to='/'>
          <img src={require('../../images/logo.svg')} alt='logo' />
        </NavLink> */}
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
            Sign In
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
