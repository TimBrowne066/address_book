import React from 'react';
import ContactCard from '../components/contactCard';
import NewContactForm from './newContactForm'
import { Navbar, Image, NavItem, MenuItem, NavDropdown, Nav, PanelGroup, Panel, Grid, Row, Col, Button, Well } from 'react-bootstrap';

class ContactsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: this.props.contacts
    }
    this.handleNewContact = this.handleNewContact.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }


  handleDelete(id){
    let header = ReactOnRails.authenticityHeaders({'Accept': 'application/json','Content-Type': 'application/json'});
    fetch(`/api/v1/contacts/${id}`, {
      credentials: 'same-origin',
      method: 'DELETE',
      headers: header
    })
  }

  handleNewContact(data) {
    let allContacts = this.state.contacts ? this.state.contacts: []
    let updatedContacts = allContacts.concat([data])
    this.setState({contacts: updatedContacts})
  }



  render() {
    let contacts = this.props.contacts.map(contact => {
      return(
        <div className="card-div">
          <ContactCard
            key={contact.id}
            id={contact.id}
            firstName={contact.firstName}
            lastName={contact.lastName}
            emailAddress={contact.emailAddress}
            phoneNumber={contact.phoneNumber}
            companyName={contact.companyName}
          />
          <a href="/"><Button type="submit" onClick={this.handleDelete(contact.id)} className="btn btn-danger">Delete Contact</Button></a>
        </div>
      )
    })
    return (
      <div className="ContactsContainer">
        <h1>Hello from contacts container</h1>
        {contacts}
        <NewContactForm
          newContact={this.handleNewContact}
        />
      </div>
    );
  }
}

export default ContactsContainer;
