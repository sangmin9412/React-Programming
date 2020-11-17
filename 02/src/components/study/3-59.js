import React, { Component, createContext } from 'react';
import Profile359 from './3-59_2';

export const UserContext = createContext('');

class Component359 extends Component {
  state = {
    username: '',
  }

  onChangeName = (e) => {
    const username = e.target.value;
    this.setState({ username });
  }

  render() {
    const { username } = this.state;
    const { code } = this.props;
    return (
      <div>
        <pre>{code}</pre>
        <UserContext.Provider value={username}>
          <Profile359 />
        </UserContext.Provider>
        <input type="text" value={username} onChange={this.onChangeName} />
      </div>
    );
  }
}

export default Component359;
