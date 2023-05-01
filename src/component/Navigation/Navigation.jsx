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
<<<<<<< HEAD
              {/* <Nav.Link href="#testimonials">Customer Reviews</Nav.Link> */}
=======
              <Nav.Link href="#testimonials">Customer Reviews</Nav.Link>
>>>>>>> 870512ee338f45ba31e945f5a02c7279214cf172
              <Nav.Link href="#contact-info">Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
};

export default Navigation;
