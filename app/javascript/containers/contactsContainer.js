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
    this.handleEmailSort = this.handleEmailSort.bind(this);
    this.handleDotComQuery = this.handleDotComQuery.bind(this);
  }

  handleEmailSort(){
    let newState = this.state.contacts.sort(function(a,b) {return (a.emailAddress > b.emailAddress) ? 1 : ((b.emailAddress > a.emailAddress) ? -1 : 0);} );
    this.setState({ contacts: newState })
  }

  handleDotComQuery(){
    let search = '.com'
    let newState = []
    for (let i = 0; i < this.state.contacts.length; i++) {
      if (this.state.contacts[i].emailAddress.includes(search)) {
        newState.push(this.state.contacts[i]);
      }
    }
    console.log(newState);
    this.setState({ contacts: newState });
  }

  handleDelete(id) {
    let header = ReactOnRails.authenticityHeaders({'Accept': 'application/json','Content-Type': 'application/json'});
    fetch('/api/v1/contacts/'+id, {
      method: 'DELETE',
      headers: header,
      credentials: 'same-origin',
    })
  }

  handleNewContact() {
    setTimeout(function(){
      fetch(`/api/v1/contacts/`)
      .then(response => {
        return response.json();
      })
      .then(body => {
        this.setState({
          contacts: body
        })
      })}.bind(this), 100)
  }

  render() {
    let contacts = this.props.contacts.map(contact => {
      return(
        <div className="card-div text-center" key={contact.id}>
          <ContactCard
            id={contact.id}
            firstName={contact.firstName}
            lastName={contact.lastName}
            emailAddress={contact.emailAddress}
            phoneNumber={contact.phoneNumber}
            companyName={contact.companyName}
            handleDelete={this.handleDelete}
          />
          <Button bsStyle="danger" type="submit" onClick={() => { this.handleDelete(contact.id) }}>Delete</Button>
        </div>
      )
    })
    return (
      <div className="ContactsContainer">
        <h1 className="headline text-center">My Contacts</h1>
        <Grid>
          <Row>
            <Col sm={12} lg={6}>
              <Col sm={12} className="contacts-list text-center">
                <div className="options">
                  <h2 className="card-title">Contacts</h2>
                  <Button bsStyle="primary" onClick={this.handleEmailSort}>Sort by email</Button>
                  <Button bsStyle="success" onClick={this.handleDotComQuery}>DotCom email only</Button>
                  {contacts}
                </div>
              </Col>
            </Col>
            <Col sm={12} lg={6}>
              <Col sm={12} className="contacts-form">
                <NewContactForm
                  newContact={this.handleNewContact}
                />
              </Col>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default ContactsContainer;
