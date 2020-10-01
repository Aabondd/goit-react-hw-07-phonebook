import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import phonebookActions from './phonebookActions';

// functions
const addContact = (state, action) => {
  return [...state, action.payload]
}

const deleteContact = (state, action) => {
  return state.filter(({ id }) => id !== action.payload);
}

const changeFilter = (state, action) => {
  return action.payload
}

// reducers
const contacts = createReducer([], {
  [phonebookActions.fetchContactsSuccess]: (state, action) => action.payload,
  [phonebookActions.addContactSuccess]: addContact,
  [phonebookActions.deleteContactSuccess]: deleteContact,
});

const filter = createReducer('', {
  [phonebookActions.changeFilter]: changeFilter,
});

const loading = createReducer(false, {
  [phonebookActions.fetchContactsRequest]: () => true,
  [phonebookActions.fetchContactsSuccess]: () => false,
  [phonebookActions.fetchContactsError]: () => false,
  [phonebookActions.addContactRequest]: () => true,
  [phonebookActions.addContactSuccess]: () => false,
  [phonebookActions.addContactError]: () => false,
  [phonebookActions.removeContactRequest]: () => true,
  [phonebookActions.removeContactSuccess]: () => false,
  [phonebookActions.removeContactError]: () => false,
});


export default combineReducers({
  contacts,
  filter,
  loading
});