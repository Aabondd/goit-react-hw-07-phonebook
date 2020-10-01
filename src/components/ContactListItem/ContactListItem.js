import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const ContactListItem = ({ name, number, onDelete }) => {
  return (
    <Item>
      <Name>{name}:</Name>
      <Number>{number}</Number>
      <Button type="button" onClick={onDelete}>Delete</Button>
    </Item>
  )
}

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired
};

const Item = styled.li`
  margin-bottom: 12px;
  :last-of-type {
    margin-bottom: 0;
  }
`;

const Name = styled.span`
  display: inline-block;
  margin-right: 10px;
`;

const Number = styled.span`
  display: inline-block;
  margin-right: 16px;
`;

const Button = styled.button`
  display: inline-block;
  padding: 4px 8px;
  color: #fff;
  background-color: #f00;
  border: 1px solid #f00;
  border-radius: 4px;
  outline: none;
`;

export default ContactListItem;