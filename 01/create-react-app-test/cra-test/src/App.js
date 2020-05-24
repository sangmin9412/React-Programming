import React from 'react';
import logo from './logo.svg';
import './App.css';
// import smallImgae from './small.jpg'; // 10KB 이하크기의 이미지는 빌드시 main.{hash}.js에 data:url로 변경되어 적용됨.
// import bigImage from './big.jpg';
import TodoList from './TodoList';
import './test.css';

function App() {
  return (
    <div className="App">
      <TodoList />
    </div>
  );
}

export default App;
