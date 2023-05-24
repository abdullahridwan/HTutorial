import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
const CustomNavbar = () => {
    return (
        <Navbar bg="light" variant="light" sticky="top">
            <Container>
                <Navbar.Brand href="#home">Brand&Logo</Navbar.Brand>
                <Nav className="ms-auto">
                    <Nav.Link href="#home" activeClassName="active">Home</Nav.Link>
                    <Nav.Link href="#about" activeClassName="active">About</Nav.Link>
                    <Nav.Link href="#contact" activeClassName="active">Contact</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default CustomNavbar;
