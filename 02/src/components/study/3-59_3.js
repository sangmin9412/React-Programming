import React, { Component } from 'react';
import { UserContext } from './3-59';

class Greeting359 extends Component {
  render() {
    return (
      <>
        <UserContext.Consumer>
          {(username) => <p>{`${username}님 안녕하세요`}</p>}
        </UserContext.Consumer>
      </>
    );
  }
}

export default Greeting359;
