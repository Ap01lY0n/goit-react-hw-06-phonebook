import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { addContact, deleteContact, updateFilter } from '../redux/contactsSlice';
import { PhoneBookForm } from './PhoneBookForm/PhoneBookForm';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';
import { Title } from './App.styled';

const App = () => {
  const contacts = useSelector(state => state.contacts.data);
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

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

    dispatch(addContact({ ...newContact, id: nanoid() }));
  };

  const onDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  const onFilterInput = value => {
    dispatch(updateFilter(value.toLowerCase().trim()));
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
