import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/header.css';


export default function Header() {
    return (
<Navbar className="custom-navbar" bg="dark" expand="lg" variant="dark">
    <Navbar.Brand href="#home">Daniel Facundo</Navbar.Brand>
    <Nav>
      <Nav.Link href="/" class="mx-auto">Home</Nav.Link>
      <Nav.Link href="/projects" class="mx-auto">Projects</Nav.Link>
      <Nav.Link href="/about" class="mx-auto">About Me</Nav.Link>
    </Nav>
</Navbar>
    )
}
