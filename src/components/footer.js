import { Navbar, Container, Nav } from 'react-bootstrap';

const Footer = () => {
    return (
        <Navbar >
            <Container>
                <Navbar.Brand href="#home">Logo & Brand </Navbar.Brand>
                <small className="ms-2">&copy; STUDIONAME, 2023. All rights reserved.</small>

            </Container>
        </Navbar>
    );
}

export default Footer;