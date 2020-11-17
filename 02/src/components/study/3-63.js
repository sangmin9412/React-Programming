import React, { Component, createContext } from 'react';

const UserContext = createContext({
  username: 'unknown',
  helloCount: 0,
  onHello: () => {},
});

class Component363 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'mike',
      helloCount: 0,
      onHello: this.onHello,
    };
  }

  onHello = () => {
    const { helloCount } = this.state;
    this.setState({ helloCount: helloCount + 1 });
  }

  render() {
    const { code } = this.props;
    return (
      <div>
        <pre>{code}</pre>
        <UserContext.Provider value={this.state}>
          <div>상단 메뉴</div>
          <Profile />
          <div>하단 메뉴</div>
        </UserContext.Provider>
      </div>
    );
  }
}

function Profile() {
  return (
    <Greeting />
  );
}

function Greeting() {
  return (
    <UserContext.Consumer>
      {(value) => (
        <>
          <p>{`${value.username}님 안녕하세요`}</p>
          <p>{`인사 횟수: ${value.helloCount}`}</p>
          <button type="button" onClick={value.onHello}>인사하기</button>
        </>
      )}
    </UserContext.Consumer>
  );
}

export default Component363;
