// eslint-disable-next-line import/prefer-default-export
export const desc347 = `
  높잇값 변경을 검사할 div 요소의 ref 객체를 정의한다.
  데이터가 추가되기 직전의 div의 높잇값 반환한다.
  getSnapshotBeforeUpdate 메서드에서 반환한 값이 componentDidUpdate 메서드의 세 번째 매개변수로 들어온다.
  높잇값이 변경되면 알림창을 띄운다.
  div 요소 안에 데이터 개수만큼의 span 요소를 넣기 때문에 개수에 따라 div 요소의 높이가 변한다.
  앞의 코드를 실행해서 버튼을 계속해서 클릭하면 div 요소의 높잇값이 변경될 때마다 알림창이 뜨는 것을 확인할 수 있다.
`;

export const desc348 = `
  div 요소의 가로 길이보다 스크롤 영역의 가로 길이가 더 크면 스크롤이 가능하다고 알려 준다.
  스크롤이 가능하도록 overflow: 'scroll' 속성을 준다.
  text 상탯값의 문자열이 충분히 길어지면 div 요소 내부는 스크롤이 가능해진다.
`;

export const desc349 = `
  componentDidUpdate 메서드 내부에서는 이전, 이후의 상탯값과 속성값을 모두 알 수 있기 때문에 이와 같은 코드를 자주 작성하게 된다.
  componentDidUpdate 메서드는 초기화 단계에서는 호출되지 않는다.
  친구 목록을 가져오는 API는 componentDidMount 메서드에서도 호출할 필요가 있다.
`;

export const desc350 = `
  componentDidMount 메서드와 componentDidUpdate 메서드 양쪽에서 친구 목록을 가져온다.
  실제로 이와 같은 패턴이 자주 사용되지만, 단지 componentDidUpdate 메서드가 첫 렌더링 후에 호출되지 않는다는 이유로 코드가 복잡해진다.
  비슷한 로직을 양쪽 모두에 작성하기 때문에 코드 중복이 발생하고, 한쪽에 코드를 작성하는 것을 깜빡해서 버그가 생기기도 한다.
  이 문제는 리액트 훅을 이용하면 쉽게 해결할 수 있다.
`;

export const desc351 = `
  이와 같은 패턴은 두 생명 주기 메서드의 코드가 길어질수록 서로 연관된 등록과 해제 코드가 물리적으로 멀어진다는 단점이 있다.
  등록하는 코드는 있고 해제하는 코드를 깜빡해서 버그가 생기는 경우도 종종 발생한다.
  componentDidUpdate의 경우와 마찬가지로 이 문제도 리액트 훅을 이용하면 쉽게 해결할 수 있다.
`;

export const desc352 = `
  자식 컴포넌트에서 예외가 발생하면 상탯값에 에러 정보를 저장한다.
  getDerivedStateFromError 메서드가 반환한 값은 기존 상탯값과 병합된다.
  componentDidCatch 메서드에서는 에러 정보를 서버로 전송한다.
  render 메서드에서는 에러가 존재하면 에러 정보를 렌더링하고, 에러가 없다면 자식 컴포넌트를 렌더링한다.
  ErrorBoundary 컴포넌트를 애플리케이션의 최상위 컴포넌트로 만들면 생명주기 메서드에서 발생하는 모든 예외를 처리할 수 있다.
`;

export const desc353 = `
  Counter 컴포넌트의 버튼을 세 번 클릭하면 예외가 발생한다.
  render 메서드는 생명 주기 메서드이므로 여기서 발생한 예외는 ErrorBoundary 컴포넌트에서 처리할 수 있다.
  ErrorBoundary 컴포넌트를 애플리케이션의 최상위 컴포넌트로 만들었다.
  따라서 자식 컴포넌트인 Counter 컴포넌트에서 발생하는 예외를 처리할 수 있다.
  ErrorBoundary 컴포넌트는 에플리케이션의 최상위 컴포넌트가 아니어도 된다.
  단, ErrorBoundary 컴포넌트의 자식 컴포넌트에서 발생한 예외만 처리할 수 있다.
  ErrorBoundary 컴포넌트를 여러 곳에서 사용해도 괜찮다
  그러면 예외가 발생한 일부 화면에만 에러 정보가 렌더링되고, 나머지 부분은 정상적으로 렌더링된다.
`;
