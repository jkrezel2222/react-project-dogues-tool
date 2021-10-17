import React from "react";
import {NavLink} from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

const Navigation = () => {
    return (
        <div>
            <br />
              <Navbar bg="light" variant="light" expand="lg">
              <Nav className="me-auto">
                <Container style={{height: "25px"}}>
                  <Navbar.Brand >Dogues</Navbar.Brand>
                  <NavLink to="/Home" style={{paddingRight: "15px", paddingLeft: "15px"}} >Home</NavLink>
                  <NavLink to="/AboutUs" style={{paddingRight: "15px", paddingLeft: "15px"}}>About Us</NavLink>
                  <NavLink to="/ContactUs">Contact Us</NavLink>
                </Container>
                </Nav>
              </Navbar>
        </div>
    );
};

export default Navigation;


