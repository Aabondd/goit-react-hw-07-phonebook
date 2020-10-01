import React, { Component, createContext } from 'react';
import { LIGHT, DARK } from '../constants';

const Context = createContext();

export default class ThemeContext extends Component {
  static Consumer = Context.Consumer;

  toggleTheme() {
    this.setState({
      type: this.state.type === DARK ? LIGHT : DARK
    });
  };

  state = {
    type: 'light',
    toggleTheme: this.toggleTheme.bind(this)
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
}