import React from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavItem,MDBNavLink,MDBNavbarNav,MDBIcon} from 'mdbreact';



export default function Header() {
  var socialmedia = {
    github: "https://github.com/DanielFacundo/",
    linkedin: "https://www.linkedin.com/in/danielfacundo/",
    facebook: "https://www.facebook.com/daniel.facundo.98",
  }
    return (
            <MDBNavbar color="bg-primary" light expand="md" scrolling transparent>
            <MDBNavbarBrand href="/">
                <strong>Daniel Facundo</strong>
            </MDBNavbarBrand>
            <MDBNavbarNav left>
            <MDBNavItem>
              <MDBNavLink to="/">Home</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/projects">Projects</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/about">About</MDBNavLink>
            </MDBNavItem>
            </MDBNavbarNav>
            <MDBNavbarNav right>
            <MDBNavItem>
              <a href={socialmedia.linkedin} target="_blank" rel="noreferrer" className="nav-link Ripple-parent">
                <MDBIcon fab icon="linkedin" />
                </a>
            </MDBNavItem>
            <MDBNavItem>
              <a href={socialmedia.github} target="_blank" rel="noreferrer" className="nav-link Ripple-parent">
                <MDBIcon fab icon="github" />
              </a>
            </MDBNavItem>
            </MDBNavbarNav>
        </MDBNavbar>
    )
}
