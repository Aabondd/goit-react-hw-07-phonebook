import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components'

import ContactListItem from '../ContactListItem';
import phonebookOperations from '../../redux/phonebook/phonebookOperations';
import contactsSelector from '../../redux/phonebook/contactsSelectors';


class ContactList extends Component {

  componentDidMount() {
    this.props.onFetchContacts();
  }

  render() {
    const { contacts } = this.props;

    if (contacts.length < 0) {
      return null;
    }

    return (
      <List>
        {contacts.map(({ id }) => {
          return (
            <ContactListItem
              key={id}
              id={id}
            />
          );
        })}
      </List>
    )
  }
}

const List = styled.ul`
  padding: 0 0 0 10px;
  margin: 0;
  list-style-position: inside;
`;

const mapStateToProps = state => ({
  contacts: contactsSelector.getVisibleContacts(state)
});

const mapDispatchToprops = {
  onFetchContacts: phonebookOperations.fetchContacts,
};

export default connect(mapStateToProps, mapDispatchToprops)(ContactList);