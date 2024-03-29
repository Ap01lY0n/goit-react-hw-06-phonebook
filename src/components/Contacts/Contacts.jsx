import React from 'react';
import { List, ListItem, DelBtn } from './Contacts.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectVisibleContacts } from '../../redux/selectors';
import { deleteContact } from '../../redux/contactsSlice';

const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectVisibleContacts);

  const onDeleteContact = (id) => {
    dispatch(deleteContact(id));
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