import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./Navigation.scss";

const Navigation = () => {
  return (  
    <Navbar expand="lg" className="fixed-top" id="navbar">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">
              <Nav.Link href="#header">About Me</Nav.Link>
              <Nav.Link href="#licence">Certificates</Nav.Link>
              <Nav.Link href="#statistics">Skills</Nav.Link>
              <Nav.Link href="#gallery">Projects</Nav.Link>
              <Nav.Link href="#testimonials">Customer Reviews</Nav.Link>
              <Nav.Link href="#contact-info">Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
};

export default Navigation;
