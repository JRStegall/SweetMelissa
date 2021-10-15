import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function Navigate() {
  return (
    <div className="navbar">
      <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
        <Navbar.Brand as={Link} className="link" to="/main">
          Sweet Melissa and the Ramblin' Men
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link
              className="link"
              href="mailto:SweetMelissa.ramblinmen@gmail.com?subject = Feedback&body = Message"
            >
              Contact
            </Nav.Link>

            <Nav.Link
              className="link"
              href="https://www.facebook.com/sweetmelissaandtheramblinmen"
              target="_blank"
            >
              Facebook
            </Nav.Link>

            <Nav.Link as={Link} className="link" to="/xtras">
              Friends of the Band
            </Nav.Link>

            <Nav.Link as={Link} className="link" to="/shows">
              Gallery
            </Nav.Link>

            <Nav.Link as={Link} className="link" to="/setlist">
              Set List
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Navigate;
