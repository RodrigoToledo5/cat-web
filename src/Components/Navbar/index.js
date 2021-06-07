import React from 'react'
import logo from './logo.svg';
import {
    Nav,
    Bars,
    NavMenu,
    NavLink,
    NavBtn,
    NavBtnLink
} from './NavBarElements'


const NavBar = () => {
    return (
        <>
           <Nav>
        <NavLink to='/'>
        <img src={logo} className="Nav-bar-Logo" alt="logo" />
        </NavLink>
        <Bars />
        <NavMenu>
            <NavLink to='/Home' activeStyle>
            Index
          </NavLink>
          <NavLink to='/about' activeStyle>
            About
          </NavLink>
          <NavLink to='/services' activeStyle>
            Services
          </NavLink>
          <NavLink to='/contact-us' activeStyle>
            Contact Us
          </NavLink> 
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
        </>
    )
}

export default NavBar
