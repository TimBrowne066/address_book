import React from 'react';
import {FormGroup, ControlLabel, FormControl, HelpBlock, Button, Col} from 'react-bootstrap';

class NewContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      emailAddress: "",
      phoneNumber: "",
      companyName: "",
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(e){
    let name = e.target.name
    let value = e.target.value
    this.setState({[name]: value})
  }
  handleSubmit(e){
    let formPayload = { contact: {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      emailAddress: this.state.emailAddress,
      phoneNumber: this.state.phoneNumber,
      companyName: this.state.companyName
    }};
    let header = ReactOnRails.authenticityHeaders({'Accept': 'application/json','Content-Type': 'application/json'});
    fetch('api/v1/contacts', {
      method: 'POST',
      headers: header,
      credentials: 'same-origin',
      body: JSON.stringify(formPayload)
    })
  }

  render() {
    console.log(this.state);
    return (
      <Col sm={12} className="form-background">
        <form className="form" onSubmit={this.handleSubmit}>
          <FormGroup controlId="formFirstName">
            <ControlLabel>First Name</ControlLabel>
            <FormControl
              type="text"
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="formLastName">
            <ControlLabel>Last Name</ControlLabel>
            <FormControl
              type="text"
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="formEmail">
            <ControlLabel>Email</ControlLabel>
            <FormControl
              type="text"
              name="emailAddress"
              value={this.state.emailAddress}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="formPhoneNumber">
            <ControlLabel>Phone Number</ControlLabel>
            <FormControl
              type="text"
              name="phoneNumber"
              value={this.state.phoneNumber}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="formCompanyName">
            <ControlLabel>Company</ControlLabel>
            <FormControl
              type="text"
              name="companyName"
              value={this.state.companyName}
              onChange={this.handleChange}
            />
          </FormGroup>
          <a href="/"><Button type="submit" onClick={this.handleSubmit}>
            submit
          </Button></a>
        </form>
      </Col>
    );
  }
}

export default NewContactForm;
