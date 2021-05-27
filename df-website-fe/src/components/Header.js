import React from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavItem,MDBNavLink,MDBNavbarNav,MDBIcon} from 'mdbreact';



export default function Header() {
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
              <MDBNavLink to="#!">
                <MDBIcon fab icon="twitter" />
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!">
                <MDBIcon fab icon="linkedin" />
              </MDBNavLink>
            </MDBNavItem>
            </MDBNavbarNav>
        </MDBNavbar>
    )
}
