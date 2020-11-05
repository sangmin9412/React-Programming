import React, { Component } from 'react';

class MyComponent351 extends Component {
  render() {
    const { code } = this.props;
    return (
      <>
        <p style={{ marginBottom: 20 }}>
          <strong>componentWillUnmount</strong> 메서드는 소멸 단계에서 호출되는 유일한 생명 주기 메서드다.<br />
          끝나지 않은 네트워크 요청을 취소, 타이머 해제, 구독(subscription) 해제 등의 작업을 처리하기 좋다.<br />
          컴포넌트에서 <strong>componenetDidMount</strong> 메서드가 호출되면 <strong>componentWillUnmount</strong> 메서드도 호출되는 것이 보장된다.<br />
          따라서 <strong>componentDidMount</strong> 메서드에서 구독하고 <strong>componentWillUnmount</strong> 메서드에서 구독을 해제하는 코드가 자주 사용된다.<br />
          예를 들어, 특정 돔 요소에 addEventListener 함수를 이용하여 이벤트 처리 함수를 등록하고, removeEventListener 함수를 이용하여 등록을 해제할 수 있다.
        </p>
        <pre>{code}</pre>
      </>
    );
  }
}

export default MyComponent351;
