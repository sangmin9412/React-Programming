import React from 'react';
import MyComponent347 from './3-47';
import MyComponent348 from './3-48';
import UserInfo349 from './3-49';
import UserInfo350 from './3-50';
import MyComponent351 from './3-51';
import ErrorBoundary352 from './3-52';
import Counter353 from './3-53';
import {
  code347, code348, code349, code350, code351, code352, code353,
} from './code';
import {
  desc347, desc348, desc349, desc350, desc351, desc352, desc353,
} from './desc';

export const sData = [
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
];
