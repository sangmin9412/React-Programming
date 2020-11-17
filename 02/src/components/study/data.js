import React from 'react';
import MyComponent347 from './3-47';
import MyComponent348 from './3-48';
import UserInfo349 from './3-49';
import UserInfo350 from './3-50';
import MyComponent351 from './3-51';
import ErrorBoundary352 from './3-52';
import Counter353 from './3-53';
import Component354 from './3-54';
import Component355 from './3-55';
import Component356 from './3-56';
import Component357 from './3-57';
import Component359 from './3-59';
import Component360 from './3-60';
import Component361 from './3-61';
import Component362 from './3-62';
import Component363 from './3-63';
import Component365 from './3-65';
import Component366 from './3-66';
import Component358 from './3-58';
import {
  code347, code348, code349, code350, code351, code352, code353, code354, code355, code356, code357, code359, code360, code361, code362, code363, code365, code366, code358, code367, code368,
} from './code';
import {
  desc347, desc348, desc349, desc350, desc351, desc352, desc353, desc354, desc355, desc356, desc357, desc359, desc360, desc361, desc362, desc363, desc365, desc366, desc358, desc367, desc368,
} from './desc';
import TextInput367 from './3-67';
import Form368 from './3-68';

export const sData = [
  {
    title: '생명 주기 메서드',
    data: [
      {
        path: '/3-47',
        title: '돔 요소의 높잇값이 변경했는지 검사하는 코드',
        content: <MyComponent347 code={code347} items={[]} />,
        desc: `${desc347}`,
      },
      {
        path: '/3-48',
        title: '스크롤이 가능해지면 알려 주는 코드',
        content: <MyComponent348 code={code348} />,
        desc: `${desc348}`,
      },
      {
        path: '/3-49',
        title: 'componentDidUpdate 메서드에서 API를 호출하는 코드',
        content: <UserInfo349 code={code349} />,
        desc: `${desc349}`,
      },
      {
        path: '/3-50',
        title: 'componentDidMount 메서드에서도 API를 호출하도록 변경',
        content: <UserInfo350 code={code350} />,
        desc: `${desc350}`,
      },
      {
        path: '/3-51',
        title: 'componentWillUnmount 메서드에서 이벤트 처리 메서드 해제하기',
        content: <MyComponent351 code={code351} />,
        desc: `${desc351}`,
      },
      {
        path: '/3-52',
        title: 'ErrorBoundary 컴포넌트',
        content: <ErrorBoundary352 code={code352} />,
        desc: `${desc352}`,
      },
      {
        path: '/3-53',
        title: 'ErrorBoundary 컴포넌트를 사용한 코드',
        content: <Counter353 code={code353} />,
        desc: `${desc353}`,
      },
      {
        path: '/3-54',
        title: '이벤트 처리 메서드에서 예외가 발생하는 경우',
        content: <Component354 code={code354} />,
        desc: `${desc354}`,
      },
      {
        path: '/3-55',
        title: '이벤트 처리 메서드에서 예외를 처리하는 코드',
        content: <Component355 code={code355} />,
        desc: `${desc355}`,
      },
    ],
  }, {
    title: 'Context API',
    data: [
      {
        path: '/3-56',
        title: '컨텍스트 API를 사용하지 않은 코드',
        content: <Component356 code={code356} />,
        desc: `${desc356}`,
      },
      {
        path: '/3-57',
        title: '컨텍스트 API를 사용한 코드',
        content: <Component357 code={code357} />,
        desc: `${desc357}`,
      },
      {
        path: '/3-59',
        title: 'shouldComponentUpdate 메서드에서 거짓을 반환하는 예',
        content: <Component359 code={code359} />,
        desc: `${desc359}`,
      },
      {
        path: '/3-60',
        title: 'Provider, Consumer 컴포넌트를 중첩해서 사용한 예',
        content: <Component360 code={code360} />,
        desc: `${desc360}`,
      },
      {
        path: '/3-61',
        title: '생명 주기 메서드에서 컨텍스트 데이터 사용하기',
        content: <Component361 code={code361} />,
        desc: `${desc361}`,
      },
      {
        path: '/3-62',
        title: '생명 주기 메서드에서 여러 개의 컨텍스트 데이터 사용하기',
        content: <Component362 code={code362} />,
        desc: `${desc362}`,
      },
      {
        path: '/3-63',
        title: '컨텍스트 데이터를 수정할 수 있는 함수 전달하기',
        content: <Component363 code={code363} />,
        desc: `${desc363}`,
      },
      {
        path: '/3-65',
        title: '불필요한 렌더링이 발생하는 예',
        content: <Component365 code={code365} />,
        desc: `${desc365}`,
      },
      {
        path: '/3-66',
        title: '불필요한 렌더링이 발생하지 않는 코드',
        content: <Component366 code={code366} />,
        desc: `${desc366}`,
      },
      {
        path: '/3-58',
        title: 'Consumer 컴포넌트가 Provider 컴포넌트를 찾지 못하는 경우',
        content: <Component358 code={code358} />,
        desc: `${desc358}`,
      },
    ],
  }, {
    title: 'ref 속성',
    data: [
      {
        path: '/3-67',
        title: '돔 요소에 접근하기 위해 ref 속성값을 사용한 예',
        content: <TextInput367 code={code367} />,
        desc: `${desc367}`,
      },
      {
        path: '/3-68',
        title: '자식 컴포넌트에 접근하기 위해 ref 속성값을 사용한 예',
        content: <Form368 code={code368} />,
        desc: `${desc368}`,
      },
    ],
  },
];
