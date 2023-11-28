// actions.js
export const addContact = (newContact) => ({
    type: 'ADD_CONTACT',
    payload: newContact,
  });
  
  export const deleteContact = (contactId) => ({
    type: 'DELETE_CONTACT',
    payload: contactId,
  });
  
  export const setFilter = (filter) => ({
    type: 'SET_FILTER',
    payload: filter,
  });
  