// reducers.js
import { nanoid } from 'nanoid';

const contactsReducer = (state = [], action) => {
    switch (action.type) {
      case 'ADD_CONTACT':
        return [...state, { ...action.payload, id: nanoid() }];
  
      case 'DELETE_CONTACT':
        return state.filter((contact) => contact.id !== action.payload);
  
      default:
        return state;
    }
  };
  
  const filterReducer = (state = '', action) => {
    switch (action.type) {
      case 'SET_FILTER':
        return action.payload;
  
      default:
        return state;
    }
  };
  
  export { contactsReducer, filterReducer };
  