import { nanoid } from 'nanoid';
import { addContact } from '../../redux/contactsSlice';

export const handleAddContact = (dispatch, contacts, newContact) => {
  const hasContact = contacts.some(({ name }) => name.toLowerCase() === newContact.name.toLowerCase());
  const isNumberExists = contacts.some(({ number }) => number === newContact.number);

  if (hasContact) {
    alert(`${newContact.name} is already in contacts.`);
    return;
  }

  if (isNumberExists) {
    alert(`${newContact.number} is already in contacts.`);
    return;
  }

  dispatch({ type: addContact, payload: { ...newContact, id: nanoid() } });
};
