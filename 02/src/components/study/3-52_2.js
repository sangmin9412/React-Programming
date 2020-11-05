import React, { Component } from 'react';

class ErrorBoundary extends Component {
  state = { error: null }

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error, info) {
    // sendErrorToServer(error, info);
  }

  render() {
    const { error } = this.state;
    const { children } = this.props;
    if (error) {
      return <div>{error.toString()}</div>;
    }
    return children;
  }
}

export default ErrorBoundary;
