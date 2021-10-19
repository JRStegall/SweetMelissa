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
            <Nav className="mr-auto">
              <Nav.Item>
                <Nav.Link eventKey="1" as={Link} className="link" to="/xtras">
                  Friends of the Band
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link eventKey="2" as={Link} className="link" to="/shows">
                  Gallery
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link eventKey="3" as={Link} className="link" to="/setlist">
                  Events/Set List
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link eventKey="4" as={Link} className="link" to="/music">
                  Music
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
