import React, { useState } from 'react'
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse } from "mdbreact";

export default function Header() {
    const [toggle, setToggle] = useState(false)

    const toggleCollapse = () => {
        setToggle(!toggle);
    }
    

    return (
        <>
            <MDBNavbar style={{ backgroundColor: "#0F4C81" }} dark expand="sm">
                <MDBNavbarBrand>
                    <strong className="white-text">My Lorem</strong>
                </MDBNavbarBrand>
                <MDBNavbarToggler onClick={toggleCollapse} />
                <MDBCollapse id="navbarCollapse3" isOpen={toggle} navbar>
                    <MDBNavbarNav right>
                        <MDBNavItem>
                            <MDBNavLink to="/posts" >Wall</MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink to="/users">Friends</MDBNavLink>
                        </MDBNavItem>
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBNavbar>

        </>
    )
}
