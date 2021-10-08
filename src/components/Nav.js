import React from 'react';
// import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Set from './SetList';

function Navigate(){
    return (
<Navbar bg="dark" variant="dark" expand="lg" sticky="top">
  <Navbar.Brand href="#home">Sweet Melissa and the Ramblin' Men</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
    <Nav.Link href="https://www.facebook.com/sweetmelissaandtheramblinmen" target="_blank">Facebook</Nav.Link>
      <Nav.Link href = "mailto:SweetMelissa.ramblinmen@gmail.com?subject = Feedback&body = Message">Contact</Nav.Link>
      <Nav.Link Link to={ Set } target="_blank">Set List</Nav.Link>

    </Nav>
    
  </Navbar.Collapse>
</Navbar>
    )
}

export default Navigate;