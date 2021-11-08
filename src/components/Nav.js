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
          <Navbar.Brand as={Link} eventKey="1" className="link bandName" to="/">
            Sweet Melissa and the Ramblin' Men
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Item>
                <Nav.Link eventKey="2" as={Link} className="link" to="/friends">
                  Friends of the Band
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link eventKey="3" as={Link} className="link" to="/gallery">
                  Gallery
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link eventKey="4" as={Link} className="link" to="/events">
                  Events/Set List
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link eventKey="5" as={Link} className="link" to="/music">
                  Bio/Music
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link
                  eventKey="6"
                  className="link"
                  href="mailto:SweetMelissa.ramblinmen@gmail.com?subject = Feedback&body = Message"
                >
                  Contact
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link
                  eventKey="7"
                  className="link"
                  href="https://www.facebook.com/sweetmelissaandtheramblinmen"
                  target="_blank"
                >
                  Facebook
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navigate;
