import React from "react";
import {NavLink} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

const Navigation = () => {
    return (
        <div>
            <br />
              <Navbar className="me-auto" bg="light" variant="light" expand="lg">
                <Container>
                  <Navbar.Brand >Dogues</Navbar.Brand>
                  <NavLink to="/Home">Home</NavLink>
                  <NavLink to="/AboutUs">About Us</NavLink>
                </Container>
              </Navbar>
        </div>
    );
};

export default Navigation;


