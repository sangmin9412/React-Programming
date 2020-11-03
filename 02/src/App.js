import React from 'react';
import AppLayout from './components/AppLayout';
import Content from './components/Content';
import Title from './components/Title';

function App() {
  return (
    <AppLayout>
      <Title title="Index" />
      <Content content={<p>리액트 스터디</p>} />
    </AppLayout>
  );
}

export default App;
