import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';



function ActsNav() {
  return(
    <div className='nav-container'>
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand >Good Will Gestures</Navbar.Brand>
      <Nav className="mr-auto">
        <Link className='link' to="../contacts/contacslist">Contacts</Link>
        <Link className='link' to="../acts/actslist">Gestures</Link>
        <Link className='link' to="/randomize">Randomize</Link>
        <Link className='link' to="../header/login">Login</Link>
        <Link className='link' to="../header/register">Sign Up</Link>
      </Nav>
    </Navbar>
    </div> 
      
        
  )
}

export default ActsNav; 