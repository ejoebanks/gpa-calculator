import React from 'react';
import { Navbar } from 'react-bootstrap';
//import img from '../header-logo.svg';

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">
        GPA Calculator
      </Navbar.Brand>
    </Navbar>
  )
}

export default NavBar;


/*

##<img src={img} alt="logo" width="50" height="50" />
  {'  '}

*/
