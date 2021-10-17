import React, { Component } from "react";
import Form from "react-bootstrap/Form";

class SelectForm extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ""}

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({value: e.target.value} => {
            fetch""
        });
    }

    handleSubmit(e) {
        e.preventDefault();
    }

    render() {
        return(
            <div>
                <Form.Select value={this.state.value} onChange={this.handleChange} aria-label="Breed size" className="aria-label-home">
                        <option>Select breed size</option>
                        <option value="Small">Small</option>
                        <option value="Medium">Medium</option>
                        <option value="Large">Large</option>

                </Form.Select>
                    <br></br>
                <button>Submit</button>
            </div>
        );
    }
}

export default SelectForm;