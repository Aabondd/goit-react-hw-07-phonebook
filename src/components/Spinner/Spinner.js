import React from 'react';
import styled from 'styled-components'

import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const Spinner = () => {
  return (
    <LoaderContainer>
      <Loader
        type="BallTriangle"
        color="#2196F3"
        height={60}
        width={60}
      />
      <LoaderText>Loading ...</LoaderText>
    </LoaderContainer>
  )
}

const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`;
const LoaderText = styled.span`
  margin-top: 8px;
`;


export default Spinner;