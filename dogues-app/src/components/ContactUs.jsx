import React, { Component } from "react";
import Container from "react-bootstrap/Container";


export class ContactUs extends Component {
    render() {
        return (
            <div>
                <Container>    
                    <h3 style={{color: "#346DB7"}}>Contact Us</h3>
                    <br></br>
                    <br></br>
                    <p style={{textAlign: "center"}}>Contact us to find out more about the services Dogues can provide:</p>
                    <p style={{textAlign: "center"}}>
                        222 Dream Street, Beachton NSW 2002
                    </p>
                    <p style={{textAlign: "center"}}>
                        +61 2 4001 2222
                    </p>
                    <p style={{textAlign: "center"}}>
                        heythere@dogues.com.au
                    </p>
                </Container>
            </div>
        )
    }
}

export default ContactUs;

