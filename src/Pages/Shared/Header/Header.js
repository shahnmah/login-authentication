import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="ms-auto header-nav">
                        <Link to='/login'>Login</Link>
                        <Link to='/signup'>SignUp</Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;