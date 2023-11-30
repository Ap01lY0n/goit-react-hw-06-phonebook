import React from 'react';
import { List, ListItem, DelBtn } from './Contacts.styled';
import { useDispatch, useSelector } from 'react-redux';
import { visibleContacts } from '../../redux/selectors';
import { deleteContact } from '../../redux/contactsSlice';

const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(visibleContacts);

  const onDeleteContact = (contactId) => {
    dispatch({ type: deleteContact, payload: contactId });
  };

  return (
    <List>
      {contacts.map(({ name, id, number }) => (
        <ListItem key={id}>
          {name} {number}
          <DelBtn type="button" onClick={() => onDeleteContact(id)}>
            Delete
          </DelBtn>
        </ListItem>
      ))}
    </List>
  );
};

export default Contacts;