import { updateFilter } from './contactsSlice';

export const getContacts = (state) => state.contacts.data;
export const getFilter = (state) => state.contacts.filter;
export const visibleContacts = (state) => {
  const contacts = getContacts(state);
  const filter = getFilter(state);
  return contacts.filter((contact) => contact.name.toLowerCase().includes(filter));
};

export const onFilterInput = (dispatch, value) => {
  dispatch(updateFilter(value.toLowerCase().trim()));
};

