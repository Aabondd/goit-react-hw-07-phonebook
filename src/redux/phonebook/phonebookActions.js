import { createAction } from '@reduxjs/toolkit';

const addContactRequest = createAction('phonebook/addRequest');
const addContactSuccess = createAction('phonebook/addSuccess');
const addContactError = createAction('phonebook/addError');

const fetchContactsRequest = createAction('phonebook/fetchRequest');
const fetchContactsSuccess = createAction('phonebook/fetchSuccess');
const fetchContactsError = createAction('phonebook/fetchError');

const deleteContactRequest = createAction('phonebook/deleteRequest');
const deleteContactSuccess = createAction('phonebook/deleteSuccess');
const deleteContactError = createAction('phonebook/deleteError');

const changeFilter = createAction('phonebook/filter');


export default {
  addContactRequest,
  addContactSuccess,
  addContactError,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  changeFilter
};