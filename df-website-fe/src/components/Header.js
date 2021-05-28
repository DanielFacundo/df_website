import React from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavItem,MDBNavLink,MDBNavbarNav,MDBIcon} from 'mdbreact';



export default function Header() {
  var socialmedia = {
    twitter: "https://twitter.com/Faccundooo",
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
              <a href={socialmedia.twitter} target="_blank" className="nav-link Ripple-parent">
                <MDBIcon fab icon="twitter" />
              </a>
            </MDBNavItem>
            <MDBNavItem>
              <a href={socialmedia.linkedin} target="_blank" className="nav-link Ripple-parent">
                <MDBIcon fab icon="linkedin" />
                </a>
            </MDBNavItem>
            </MDBNavbarNav>
        </MDBNavbar>
    )
}
