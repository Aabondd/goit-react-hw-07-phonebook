import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

import ThemeSwitch from '../ThemeSwitch';
import withTheme from '../hoc/withTheme';
import { LIGHT } from '../../constants';

const Layout = ({ children, theme }) => {
  return (
    <Root theme={theme.type}>
      <Wrapper theme={theme.type}>
        <ThemeSwitch />
        {children}
      </Wrapper>
    </Root>
  )
};

const Root = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${props => props.theme === LIGHT ? '#eee' : '#444'};
`;

const Wrapper = styled.main`
  position: relative;
  width: 80%;
  min-height: 100vh;
  padding: 60px 40px;
  margin: 0 auto;
  color: ${props => props.theme === LIGHT ? '#333' : '#fff'};
  background-color: ${props => props.theme === LIGHT ? '#fff' : '#222'};
`;

Layout.propTypes = {
  children: PropTypes.node.isRequired
}


export default withTheme(Layout);