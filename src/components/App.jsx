import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { FormList } from './Form/FormList';
import { ContactList } from './ContactsList/CotactsList';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = (values, { resetForm }) => {
    const newContact = { id: nanoid(3), ...values };
    const newContactName = newContact.name.toLowerCase();
    if (
      this.state.contacts.find(
        people => people.name.toLowerCase() === newContactName
      )
    ) {
      alert(`${newContact.name} is already in contact`);
    } else {
      this.setState(prevState => ({
        contacts: [newContact, ...prevState.contacts],
      }));
      resetForm();
    }
  };

  onFilterChange = e => {
    const filterWord = e.target.value.toLowerCase();
    this.setState({ filter: filterWord });
  };

  deleteContact = contactID => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactID),
    }));
  };

  render() {
    const { filter } = this.state;
    const { addContact, deleteContact, onFilterChange } = this;
    const visibleContact = this.state.contacts.filter(abonent =>
      abonent.name.toLocaleLowerCase().includes(this.state.filter)
    );
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
          flexDirection: 'column',
        }}
      >
        <h2>Phonebook</h2>
        <FormList onSubmit={addContact} />
        <h3 style={{ margin: '15px 0 0' }}>Contacts</h3>
        <h4 style={{ margin: '15px 0 ' }}>Find contacs by name</h4>
        <Filter value={filter} onFilterChange={onFilterChange} />
        <ContactList
          listAbonents={visibleContact}
          deleteContact={deleteContact}
        />
      </div>
    );
  }
}
