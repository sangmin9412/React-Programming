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
