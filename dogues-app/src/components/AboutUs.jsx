import React, { Component } from "react";
import DogGallery from "./DogGallery";

class AboutUs extends Component {

    // state = {

    // };

    //componentDidMount() here

    render() {
        return(
            <section>
                <h3>About Us</h3>
                <br></br>
                <p>
                    Dogues are delighted to bring you information to help you with the furry love in your life.
                </p>

                <DogGallery />

            </section>
        );

    }


}

export default AboutUs;