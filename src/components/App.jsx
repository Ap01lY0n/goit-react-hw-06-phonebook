import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { handleAddContact } from './PhoneBookForm/PhoneBookFormLogic';
import { PhoneBookForm } from './PhoneBookForm/PhoneBookForm';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';
import { Title } from './App.styled';

const App = () => {
  const contacts = useSelector(state => state.contacts.data);
  const dispatch = useDispatch();
  
  const onFormSubmit = newContact => {
    handleAddContact(dispatch, contacts, newContact);
  };

  return (
    <div>
      <Title>Phonebook</Title>
      <PhoneBookForm onAddContact={onFormSubmit} />
      <Filter />
      <Title>Contacts</Title>
      <Contacts/>
    </div>
  );
};

export default App;