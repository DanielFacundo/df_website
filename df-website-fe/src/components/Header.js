import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Header() {
    return (
<Navbar bg="dark" expand="lg" variant="dark">
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/" class="mx-auto">Home</Nav.Link>
      <Nav.Link href="/projects" class="mx-auto">Projects</Nav.Link>
      <Nav.Link href="/about" class="mx-auto">About Me</Nav.Link>

    </Nav>
  </Navbar.Collapse>
</Navbar>
    )
}
