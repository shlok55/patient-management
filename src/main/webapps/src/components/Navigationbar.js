import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom'

export default function NavigationBar() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Patient Management System</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link to="/patient ">Add Patient &nbsp;</Link>
            <Link to="/listPatients">List Patient</Link>
            <Link to="/Register">Register</Link>


          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )

}