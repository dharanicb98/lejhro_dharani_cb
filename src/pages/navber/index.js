import React, { useState } from 'react';
import { Navbar, Nav, Offcanvas } from 'react-bootstrap';
import './index.css';

function CustomNavbar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar
        bg="light"
        expand="lg"
        fixed="top"
        className="navbar-custom"
        style={{ backgroundColor: '#ffa500' }} // Inline style for debugging
      >
        <Navbar.Brand href="#">
          <img
            src="https://www.lejhro.com/lejhro_logo_white.png"
            alt="Lejhro Logo"
            className="logo"
            style={{color:"blue" , height:"40px" , width: "300px" , backgroundColor:"#ffa500"}}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleShow} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">Innovations</Nav.Link>
            <Nav.Link href="#">Business Services</Nav.Link>
            <Nav.Link href="#">Financial Services</Nav.Link>
            <Nav.Link href="#">Bootcamp</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <img
              src="https://www.lejhro.com/lejhro_logo_white.png"
              alt="Lejhro Logo"
              className="logo"
            />
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link href="#">Innovations</Nav.Link>
            <Nav.Link href="#">Bootcamp</Nav.Link>
            <Nav.Link href="#">Business Services</Nav.Link>
            <Nav.Link href="#">Financial Services</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">Contact Us</Nav.Link>
            <Nav.Link href="#">Blogs</Nav.Link>
            <div className="social-links">
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-linkedin-in"></i></a>
              <a href="#"><i className="fab fa-youtube"></i></a>
            </div>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default CustomNavbar;
