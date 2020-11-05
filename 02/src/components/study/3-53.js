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
      <ErrorBoundary>
        <pre>{code}</pre>
        <div onClick={this.onClick}>{`클릭하세요${count}`}</div>
      </ErrorBoundary>
    );
  }
}

export default Counter353;
