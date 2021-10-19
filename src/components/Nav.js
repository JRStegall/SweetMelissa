import React from "react";
import { Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function Navigate() {
  return (
    <div className="navbar">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand as={Link} className="link bandName" to="/main">
            Sweet Melissa and the Ramblin' Men
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} className="link" to="/xtras">
                Friends of the Band
              </Nav.Link>

              <Nav.Link as={Link} className="link" to="/shows">
                Gallery
              </Nav.Link>

              <Nav.Link as={Link} className="link" to="/setlist">
                Set List
              </Nav.Link>

              <Nav.Link as={Link} className="link" to="/music">
                Music
              </Nav.Link>

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
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navigate;
