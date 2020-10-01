import { createSelector } from '@reduxjs/toolkit';

const getContacts = state => state.phonebook.contacts;

const getLoading = state => state.phonebook.loading;

const getFilter = state => state.phonebook.filter;

const getVisibleContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
  }
);

const getContactById = createSelector(
  [(_, contactId) => contactId, getContacts],
  (contactId, contacts) => contacts.find(contact => contact.id === contactId)
);

export default {
  getContacts,
  getLoading,
  getFilter,
  getVisibleContacts,
  getContactById
};