import React, { Component, createContext } from 'react';

const ThemeContext = createContext('dark');

class Component361 extends Component {
  componentDidMount() {
    const theme = this.context;
    console.log(theme);
  }

  render() {
    const { code } = this.props;
    return (
      <div>
        <pre>{code}</pre>
      </div>
    );
  }
}

Component361.contextType = ThemeContext;

export default Component361;
