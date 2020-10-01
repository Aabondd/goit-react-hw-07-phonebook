import { connect } from 'react-redux';

import ContactListItem from './ContactListItem';
import phonebookOperations from '../../redux/phonebook/phonebookOperations';
import contactsSelectors from '../../redux/phonebook/contactsSelectors';

const mapStateToProps = (state, ownProps) => {
  const contact = contactsSelectors.getContactById(state, ownProps.id);

  return {
    ...contact
  }
};

const mapDispatchToprops = (dispatch, { id }) => ({
  onDelete: () => dispatch(phonebookOperations.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToprops)(ContactListItem);