import React from 'react';
import styled from 'styled-components'

import withTheme from '../hoc/withTheme';
import { LIGHT } from '../../constants';

const ThemeSwitch = ({ theme }) => {
  const { type, toggleTheme } = theme;

  return (
    <Root>
      <Label>
        <Input type="checkbox" checked={type === LIGHT} onChange={toggleTheme} />
        <Slider className="slider round"></Slider>
      </Label>
    </Root>
  )
};

const Root = styled.div`
  position: absolute;
  top: 30px;
  right: 20px;
  z-index: 1;
`;

const Label = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
`;

const Input = styled.input`
  display: none;
  &:checked + span {
  background-color: #2196F3;
  }
  &:focus + span {
    box-shadow: 0 0 1px #2196F3;
  }
  &:checked + span:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
`;

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  border-radius: 34px;
  -webkit-transition: .4s;
  transition: .4s;
  &:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    border-radius: 50%;
    -webkit-transition: .4s;
    transition: .4s;
  }
`;

export default withTheme(ThemeSwitch);