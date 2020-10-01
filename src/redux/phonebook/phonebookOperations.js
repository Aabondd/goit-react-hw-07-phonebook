import axios from 'axios';
import phonebookActions from './phonebookActions';

const addContact = (name, number) => (dispatch, getState) => {
  // Check if a new name exists in contacts
  const currentContacts = getState().phonebook.contacts;
  if (currentContacts.find(contact => contact.name === name)) {
    alert(`${name} is already in contacts`);
    return null;
  }

  // Add a new contact
  dispatch(phonebookActions.addContactRequest());

  axios
    .post('http://localhost:3500/contacts', { name, number })
    .then(({ data }) => dispatch(phonebookActions.addContactSuccess(data)))
    .catch(error => dispatch(phonebookActions.addContactError(error)));
};

const fetchContacts = () => dispatch => {
  dispatch(phonebookActions.fetchContactsRequest());

  axios
    .get('http://localhost:3500/contacts')
    .then(({ data }) => dispatch(phonebookActions.fetchContactsSuccess(data)))
    .catch(error => dispatch(phonebookActions.fetchContactsError(error)));
};

const deleteContact = id => dispatch => {
  dispatch(phonebookActions.deleteContactRequest());

  axios
    .delete(`http://localhost:3500/contacts/${id}`)
    .then(() => dispatch(phonebookActions.deleteContactSuccess(id)))
    .catch(error => dispatch(phonebookActions.deleteContactError(error)));
};

export default {
  addContact,
  fetchContacts,
  deleteContact,
};
