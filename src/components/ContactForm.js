import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components'

import withTheme from './hoc/withTheme';
import { LIGHT } from '../constants';
import phonebookOperations from '../redux/phonebook/phonebookOperations'

class ContactForm extends Component {
  state = {
    name: '',
    number: ''
  };

  handleChange = ({ target }) => {
    const { name, value } = target;

    this.setState({
      [name]: value,
    })

  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;

    if (name && number) {
      this.props.onCreateContact(this.state.name, String(this.state.number));
      return this.setState({ name: '', number: '' });
    }

    return null;
  };


  render() {
    const { name, number } = this.state;
    const { type } = this.props.theme;

    return (
      <form onSubmit={this.handleSubmit}>
        <Label>
          <LabelText>Name</LabelText>
          <input type="text" name="name" value={name} onChange={this.handleChange} required />
        </Label>
        <Label>
          <LabelText>Number</LabelText>
          <input type="text" name="number" value={number} onChange={this.handleChange} required />
        </Label>
        <SubmitBtn type="submit" theme={type}>Add contact</SubmitBtn>
      </form>
    )
  }
}

const Label = styled.label`
  display: block;
  margin-bottom: 16px;
`;

const LabelText = styled.span`
  display: block;
  margin-bottom: 8px;
`;

const SubmitBtn = styled.button`
  padding: 10px 16px;
  color: ${props => props.theme === LIGHT ? '#222' : '#fff'};
  background-color: ${props => props.theme === LIGHT ? '#fff' : '#777'};
  border: 1px solid ${props => props.theme === LIGHT ? '#777' : '#fff'};
  border-radius: 4px;
  outline: none;
`;

const mapDispatchToprops = {
  onCreateContact: phonebookOperations.addContact,
};

export default connect(null, mapDispatchToprops)(withTheme(ContactForm));