import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components'

import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import ThemeContext from '../context/ThemeContext';
import Layout from './Layout/Layout';
import contactsSelector from '../redux/phonebook/contactsSelectors';
import Spinner from './Spinner/Spinner';


const App = ({ contacts, loading }) => {

  return (
    <ThemeContext>
      <Layout>
        <Section>
          <PageTitle>Phonebook</PageTitle>
          <ContactForm />
        </Section>
        {loading && <Spinner />}
        <Section>
          <SectionTitle>Contacts</SectionTitle>
          {contacts.length > 1 && <Filter />}
          <ContactList />
        </Section>
      </Layout>
    </ThemeContext>
  )
}

const Section = styled.section`
  &:not(:last-of-type) {
    margin-bottom: 40px;
  }
`;

const PageTitle = styled.h1`
  margin-bottom: 20px;
  font-size: 48px;
  font-weight: 700;
`;

const SectionTitle = styled.h2`
  margin-bottom: 20px;
  font-size: 42px;
  font-weight: 500;
`;


const mapStateToProps = state => ({
  contacts: contactsSelector.getContacts(state),
  loading: contactsSelector.getLoading(state)
});

export default connect(mapStateToProps)(App);