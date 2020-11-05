import React, { Component } from 'react';

class MyComponent348 extends Component {
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
    const { code } = this.props;
    return (
      <>
        <pre>{code}</pre>
        <input onChange={this.onChange} value={text} />
        <div ref={this.divRef} style={{ width: 100, height: 100, overflow: 'scroll' }}>
          {text}
        </div>
      </>
    );
  }
}

export default MyComponent348;
