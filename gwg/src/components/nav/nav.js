import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';



function ActsNav() {
  return(
    <div className='nav-container'>
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand to='/protected'>Good Will Gestures</Navbar.Brand>
      <Nav className="mr-auto">
        <Link className='link' to="/protected">Contacts</Link>
        <Link className='link' to="/addCard">Gestures</Link>
        <Link className='link' to="/qrScan">Randomize</Link>
        <Link className='link' to="/login">Login</Link>
        <Link className='link' to="/user">Sign Up</Link>
      </Nav>
    </Navbar>
    </div> 
      
        
  )
}

export default ActsNav;