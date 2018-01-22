import React from 'react';
import { Navbar, Image, NavItem, MenuItem, NavDropdown, Nav, PanelGroup, Panel, Grid, Row, Col, Button, Well } from 'react-bootstrap';

const ContactCard = (props) => {
  return (
    <div className="ContactCard">
      <h2>{props.firstName} {props.lastName}</h2>
      <p>Email: {props.emailAddress}</p>
      <p>Phone: {props.phoneNumber}</p>
      <p>Company: {props.companyName}</p>
    </div>
  )
}

export default ContactCard;
