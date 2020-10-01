import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components'

import phonebookActions from '../../redux/phonebook/phonebookActions';
import contactsSelector from '../../redux/phonebook/contactsSelectors';

const Filter = ({ value, onChange }) => {
  return (
    <Label>
      <LabelText>Find contacts by name</LabelText>
      <input type="text" name="filter" value={value} onChange={e => onChange(e.target.value)} />
    </Label>
  )

}

const Label = styled.label`
  display: block;
  margin-bottom: 16px;
`;

const LabelText = styled.span`
  display: block;
  margin-bottom: 8px;
`;

const mapStateToProps = state => ({
  value: contactsSelector.getFilter(state),
});

const mapDispatchToprops = {
  onChange: phonebookActions.changeFilter,
};

export default connect(mapStateToProps, mapDispatchToprops)(Filter);