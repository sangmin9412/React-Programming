import React, { Component, createRef } from 'react';
import TextInput367 from './3-67';

class Form368 extends Component {
  textInputRef = createRef();

  onClick = () => {
    this.textInputRef.current.setTextFocus();
  };

  render() {
    const { code } = this.props;
    return (
      <div>
        <pre>{code}</pre>
        <TextInput367 ref={this.textInputRef} />
        <button type="button" onClick={this.onClick}>텍스트로 이동</button>
      </div>
    );
  }
}

export default Form368;
