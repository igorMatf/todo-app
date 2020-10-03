import React from 'react'
import { Nav, Navbar } from 'react-bootstrap';
function Header() {
    return (
        <Navbar fixed="top" bg="dark" variant="dark" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link id="home-nav" className="nav-link-header" href="/"> Home </Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link id="login-nav" className="nav-link-header" href="/login" > Login </Nav.Link>
                    <Nav.Link id="register-nav" className="nav-link-header" href="/register" > Register </Nav.Link>

                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header
