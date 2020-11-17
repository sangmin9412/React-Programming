// eslint-disable-next-line import/prefer-default-export
export const code347 = `import React, { Component } from 'react';

class MyComponent extends Component {
  state = {
    items: [],
  }

  divRef = React.createRef();

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('prevProps - ', prevProps, 'prevState', prevState);
    const { items } = this.state;
    if (prevProps.items && prevProps.items.length < items.length) {
      const rect = this.divRef.current.getBoundingClientRect();
      return rect.height;
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (snapshot !== null) {
      const rect = this.divRef.current.getBoundingClientRect();
      if (rect.height !== snapshot) {
        alert('새로운 줄이 추가되었습니다.');
      }
    }
  }

  onClick = () => {
    const { items } = this.state;
    this.setState({ items: [...items, '아이템'] });
  }

  render() {
    const { items } = this.state;
    return (
      <>
        <button type="button" onClick={this.onClick}>추가하기</button>
        <div ref={this.divRef} style={{ width: '100%' }}>
          {items.map((item) => <span style={{ display: 'block', height: 50 }}>{item}</span>)}
        </div>
      </>
    );
  }
}

export default MyComponent;`;

export const code348 = `import React, { Component } from 'react';

class MyComponent extends Component {
  state = {
    text: '',
  }

  divRef = React.createRef();

  componentDidUpdate() {
    const div = this.divRef.current;
    const rect = div.getBoundingClientRect();
    console.log(div.scrollWidth, rect.width);
    if (div.scrollWidth > rect.width) {
      alert('스크롤이 가능합니다.');
    }
  }

  onChange = (e) => {
    const text = e.target.value;
    this.setState({ text });
  }

  render() {
    const { text } = this.state;
    return (
      <>
        <input onChange={this.onChange} value={text} />
        <div ref={this.divRef} style={{ width: 100, height: 100, overflow: 'scroll' }}>
          {text}
        </div>
      </>
    );
  }
}

export default MyComponent;`;

export const code349 = `class UserInfo extends Component {
  componentDidUpdate(prevProps) {
    const { user } = this.props;
    if (prevProps.user.id !== user.id) {
      requestFriends(user).then(friends => this.setState({ friends }));
    }
  }
}`;

export const code350 = `class UserInfo extends Component {
  componentDidMount() {
    const { user } = this.props;
    this.setFriends(user);
  }
  componentDidUpdate(prevProps) {
    const { user } = this.props;
    if (prevProps.user.id !== user.id) {
      this.setFriends(user);
    }
  }
  setFriends(user) {
    requestFriends(user).then(friends => this.setState({ friends }));
  }
}`;

export const code351 = `class MyComponent extends Component {
  componentDidMount() {
    const domNode = document.querySelector('#someNode');
    domNode.addEventListener('change', this.onChange);
    domNode.addEventListener('dragstart', this.onDragStart);
  }

  componentWillUnmount() {
    const domNode = document.querySelector('#someNode');
    domNode.removeEventListener('change', this.onChange);
    domNode.removeEventListener('dragstart', this.onDragStart);
  }
}`;

export const code352 = `class ErrorBoundary extends Component {
  state = { error: null }

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error, info) {
    sendErrorToServer(error, info);
  }

  render() {
    const { error } = this.state;
    if (error) {
      return <div>{error.toString()}</div>;
    }
    return this.props.children;
  }
}`;

export const code353 = `class Counter extends Component {
  state = { count: 0 }

  onClick = () => {
    const { count } = this.state;
    this.setState({ count: count + 1 });
  }

  render() {
    const { count } = this.state;
    if (count >= 3) {
      throw new Error('에러 발생!!!');
    }
    return (
      <div onClick={this.onClick}>{\`클릭하세요\${count}\`}</div>
    );
  }
}

function App() {
  return (
    <ErrorBoundary>
      <Counter />
    </ErrorBoundary>
  )
}`;

export const code354 = `onClick = () => {
  this.setState({ name: 'mike });
  throw new Error('some error');
  this.setState({ age: 20 });
}`;

export const code355 = `onClick = () => {
  try {
    this.setState({ name: 'mike });
    throw new Error('some error');
    this.setState({ age: 20 });
  } catch (e) {
    // ... 상탯값 롤백
  }
}`;

export const code356 = `class App extends Component {
  render() {
    return (
      <div>
        <div>상단 메뉴</div>
        <Profile username="mike" />
        <div>하단 메뉴</div>
      </div>
    );
  }
}

function Profile({ username }) {
  return (
    <div>
      <Greeting username={username} />
      {/* ... */}
    </div>
  );
}

function Greeting({ username }) {
  return <p>{\`\${username}님 안녕하세요\`}</p>
}`;

export const code357 = `const UserContext = createContext('unknown');

class App extends Component {
  render() {
    const { code } = this.props;
    return (
      <div>
        <UserContext.Provider value="mike">
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
    <div>
      <Greeting />
      {/* ... */}
    </div>
  );
}

function Greeting() {
  return (
    <UserContext.Consumer>
      {username => <p>\`\${username}님 안녕하세요\`</p>}
    </UserContext.Consumer>
  );
}`;

export const code359 = `class App extends Component {
  state = {
    username: '',
  };

  onChangeName = (e) => {
    const username = e.target.value;
    this.setState({ username });
  };

  render() {
    const { username } = this.state;
    return (
      <div>
        <UserContext.Provider value={username}>
          <Profile />
        </UserContext.Provider>
        <input type="text" value={username} onChange={this.onChangeName} />
      </div>
    );
  }
}

class Profile extends PureComponent {
  render() {
    return (
      <Greeting />
    );
  }
} 

function Greeting() {
  return (
    <UserContext.Consumer>
      {username => <p>{\`\${username}님 안녕하세요\`}</p>}
    </UserContext.Consumer>
  );
}`;

export const code360 = `const UserContext = createContext('unknown');
const ThemeContext = createContext('dark');

class App extends Component {
  render() {
    return (
      <div>
        <ThemeContext.Provider value="light">
          <UserContext.Provider value="mike">
            <div>상단 메뉴</div>
            <Profile />
            <div>하단 메뉴</div>
          </UserContext.Provider>
        </ThemeContext.Provider>
      </div>
    );
  }
}

function Profile() {
  return (
    <div>
      <Greeting />
    </div>
  );
}

function Greeting() {
  return (
    <ThemeContext.Consumer>
      {(theme) => (
        <UserContext.Consumer>
          {(username) => (
            <p
              style={{ color: theme === 'dark' ? 'gray' : 'green' }}
            >{\`\${username}님 안녕하세요\`}
            </p>
          )}
        </UserContext.Consumer>
      )}
    </ThemeContext.Consumer>
  );
}

export default App;
`;

export const code361 = `const ThemeContext = createContext('dark');

class MyComponent extends Component {
  componentDidMount() {
    const theme = this.context;
    console.log(theme);
  }

  // ...
}

MyComponent.contextType = ThemeContext;
`;

export const code362 = `const UserContext = createContext('unknown);
const ThemeContext = createContext('dark);

class MyComponent extends Component {
  componentDidMount() {
    const { username, theme } = this.props;
    // ...
  }
  // ...
}

export default props => (
  <UserContext.Consumer>
    {(username) => (
      <ThemeContext.Consumer>
        {(theme) => <MyComponent username={username} theme={theme} />}
      </ThemeContext.Consumer>
    )}
  </UserContext.Consumer>
);`;

export const code363 = `const UserContext = createContext({
  username: 'unknown',
  helloCount: 0,
  onHello: () => {},
});

class App extends Component {
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
    return (
      <div>
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
          <p>{\`\${value.username}님 안녕하세요\`}</p>
          <p>{\`인사 횟수: \${value.helloCount}\`}</p>
          <button type="button" onClick={value.onHello}>인사하기</button>
        </>
      )}
    </UserContext.Consumer>
  );
}`;

export const code365 = `const UserContext = createContext({ name: 'unknown' });

class MyComponent extends Component {
  // ...
  onChangeName = (e) => {
    const name = e.target.value;
    this.setState({ name });
  };
  render() {
    const { name } = this.state;
    return (
      <div>
        <UserContext.Provider value={{ name }}>
          {/* ... */}
        </UserContext.Provider>
      </div>
    );
  }
}`;

export const code366 = `class MyComponent extends Component {
  state = {
    userContextValue: {
      name: 'unknown',
    }
  }
  onChangeName = (e) => {
    const name = e.target.value;
    this.setState({ userContextValue: { name } });
  };
  render() {
    const { userContextValue } = this.state;
    return (
      <div>
        <UserContext.Provider value={userContextValue}>
          {/* ... */}
        </UserContext.Provider>
      </div>
    );
  }
}`;

export const code358 = `const UserContext = createContext('unknown');

class MyComponent extends Component {
  render() {
    return (
      <div>
        <UserContext.Provider value={userContextValue}>
          {/* ... */}
        </UserContext.Provider>
        <Profile />
      </div>
    );
  }
}`;

export const code367 = `class TextInput extends Component {
  textRef = createRef();

  componentDidMount() {
    this.setTextFocus();
  }

  setTextFocus() {
    this.textRef.current.focus();
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.textRef} />
        <button type="button">저장</button>
      </div>
    );
  }
}`;

export const code368 = `class Form extends Component {
  textInputRef = createRef();

  onClick = () => {
    this.textInputRef.current.setTextFocus();
  };

  render() {
    return (
      <div>
        <TextInput ref={this.textInputRef} />
        <button type="button" onClick={this.onClick}>텍스트로 이동</button>
      </div>
    );
  }
}`;
