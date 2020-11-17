import React, { Component } from 'react';
import ErrorBoundary from './3-52_2';

class Counter353 extends Component {
  state = { count: 0 }

  onClick = () => {
    const { count } = this.state;
    this.setState({ count: count + 1 });
  }

  render() {
    const { count } = this.state;
    const { code } = this.props;
    if (count >= 3) {
      throw new Error('에러 발생!!!');
    }
    return (
      <>
        <pre>{code}</pre>
        <ErrorBoundary>
          <div onClick={this.onClick}>{`클릭하세요${count}`}</div>
        </ErrorBoundary>
        <p style={{ marginTop: 20 }}>
          <em>create-react-app 을 사용했을 경우에는 따로 처리를 해줘야 하는 것으로 생각됨.</em>
        </p>
      </>
    );
  }
}

export default Counter353;
