import React, { Component, createRef } from 'react';

class TextInput367 extends Component {
  textRef = createRef();

  componentDidMount() {
    this.setTextFocus();
  }

  setTextFocus() {
    this.textRef.current.focus();
  }

  render() {
    const { code } = this.props;
    return (
      <div>
        { code && <pre>{code}</pre> }
        <input type="text" ref={this.textRef} />
        <button type="button">저장</button>
      </div>
    );
  }
}

export default TextInput367;
