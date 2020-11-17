import React, { Component } from 'react';

class ErrorBoundary extends Component {
  state = {
    error: null,
  }

  static getDerivedStateFromError(error) {
    console.log('getDerivedStateFromError - ');
    return { error };
  }

  componentDidCatch(error, info) {
    console.log('componentDidCatch - ');
    // sendErrorToServer(error, info);
  }

  render() {
    const { error } = this.state;
    const { children } = this.props;
    if (error) {
      return <div>{error && error.toString()}</div>;
    }
    return children;
  }
}

export default ErrorBoundary;
