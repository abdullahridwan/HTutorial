import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // If using React Router
import './styles.css'

const MyNavbar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand>
                <img src="/path/to/logo.png" alt="Logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-nav" />
            <Navbar.Collapse id="navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/about">About</Nav.Link>
                    <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

const Home = () => {
    return (
        <div>
            <MyNavbar />
            <div className="home-page">
                <div className="overlay">
                    <h1 className="title">Welcome to Our Website</h1>
                    <p className="subtitle">Explore and Discover</p>
                </div>
            </div>
        </div>
    );
};

export default Home;
