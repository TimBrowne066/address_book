import React from 'react';
import { Navbar, Image, NavItem, MenuItem, NavDropdown, Nav, PanelGroup, Panel, Grid, Row, Col, Button, Well } from 'react-bootstrap';

class ContactCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {

    return (
      <div className="ContactCard">
      <h2>{this.props.firstName} {this.props.lastName}</h2>
      <p>Email: {this.props.emailAddress}</p>
      <p>Phone: {this.props.phoneNumber}</p>
      <p>Company: {this.props.companyName}</p>
      </div>
    );
  }
}

export default ContactCard;
