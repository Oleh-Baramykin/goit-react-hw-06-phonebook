import React, { Component } from 'react';
import { Globstyle } from './App.styled';
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

  componentDidMount() {
    const parsedContacts = JSON.parse(localStorage.getItem('contacts'));
    if (parsedContacts) this.setState({ contacts: parsedContacts });
  }

  componentDidUpdate(_, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = (values, { resetForm }) => {
    const newContact = { id: nanoid(3), ...values };
    const newContactName = newContact.name.toLowerCase();
    if (
      this.state.contacts.find(
        people => people.name.toLowerCase() === newContactName
      )
    ) {
      alert(`${newContact.name} is already in contact`);
      resetForm();
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

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  filterContact = () => {
    const { contacts, filter } = this.state;
    const visibleContact = contacts.filter(abonent =>
      abonent.name.toLowerCase().includes(filter)
    );

    return visibleContact;
  };

  render() {
    const { addContact, deleteContact, onFilterChange, filterContact } = this;
    const { filter, contacts } = this.state;

    return (
      <Globstyle>
        <h1>Phonebook</h1>
        <FormList onSubmit={addContact} />
        {contacts.length === 0 ? (
          <h2>You have no contacts saved</h2>
        ) : (
          <>
            <h2 style={{ margin: '30px 0 0' }}>Contacts</h2>
            <h2 style={{ margin: '15px 0 ' }}>Find contacs by name</h2>

            <Filter value={filter} onFilterChange={onFilterChange} />
            {filter !== contacts.name && (
              <ContactList
                listAbonents={filterContact()}
                deleteContact={deleteContact}
              />
            )}
          </>
        )}
      </Globstyle>
    );
  }
}
