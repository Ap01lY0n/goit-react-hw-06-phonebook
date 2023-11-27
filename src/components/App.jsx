import React, { useState, useEffect } from 'react';
import { PhoneBookForm } from './PhoneBookForm/PhoneBookForm';
import { nanoid } from 'nanoid';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';
import { Title } from './App.styled';

const App = () => {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem('contacts');
    return savedContacts ? JSON.parse(savedContacts) : [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);


  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const onFormSubmit = newContact => {
    const hasContact = contacts.some(({ name }) =>
      name.toLowerCase() === newContact.name.toLowerCase()
    );

    const isNumberExists = contacts.some(
      ({ number }) => number === newContact.number
    );

    if (hasContact) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }

    if (isNumberExists) {
      alert(`${newContact.number} is already in contacts.`);
      return;
    }

    setContacts(prevContacts => [
      ...prevContacts,
      { ...newContact, id: nanoid() },
    ]);
  };

  const onDeleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  const onFilterInput = value => {
    setFilter(value.toLowerCase().trim());
  };

  const filterVisibleContacts = () => {
    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter);
    });
  };

  const visibleContacts = filterVisibleContacts();

  return (
    <div>
      <Title>Phonebook</Title>
      <PhoneBookForm onAddContact={onFormSubmit} />
      <Filter onChange={onFilterInput} />
      <Title>Contacts</Title>
      <Contacts contacts={visibleContacts} onDelete={onDeleteContact} />
    </div>
  );
};

export default App;
