import React from 'react';
import {
  BrowserRouter as Router, Link, Route, Switch,
} from 'react-router-dom';
import Content from './Content';
import Description from './Description';
import MyComponent347 from './study/3-47';
import MyComponent348 from './study/3-48';
import UserInfo349 from './study/3-49';
import UserInfo350 from './study/3-50';
import MyComponent351 from './study/3-51';
import {
  desc347, desc348, desc349, desc350, desc351,
} from './study/desc';
import Title from './Title';

const AppLayout = ({ children }) => (
  <Router>
    <div className="wrapper">
      <nav className="navigation box-style">
        <h2>Link</h2>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/3-47">돔 요소의 높잇값이 변경했는지 검사하는 코드</Link></li>
          <li><Link to="/3-48">스크롤이 가능해지면 알려 주는 코드</Link></li>
          <li><Link to="/3-49">componentDidUpdate 메서드에서 API를 호출하는 코드</Link></li>
          <li><Link to="/3-50">componentDidMount 메서드에서도 API를 호출하도록 변경</Link></li>
          <li><Link to="/3-51">componentWillUnmount 메서드에서 이벤트 처리 메서드 해제하기</Link></li>
        </ul>
      </nav>
      <div className="container box-style">
        <Switch>
          <Route path="/" exact>
            {children}
          </Route>
          <Route path="/3-47" exact>
            <Title title="돔 요소의 높잇값이 변경됐는지 검사하는 코드" />
            <Content content={<MyComponent347 items={[]} />} />
          </Route>
          <Route path="/3-48" exact>
            <Title title="스크롤이 가능해지면 알려 주는 코드" />
            <Content content={<MyComponent348 />} />
          </Route>
          <Route path="/3-49" exact>
            <Title title="componentDidUpdate 메서드에서 API를 호출하는 코드" />
            <Content content={<UserInfo349 />} />
          </Route>
          <Route path="/3-50" exact>
            <Title title="componentDidMount 메서드에서도 API를 호출하도록 변경" />
            <Content content={<UserInfo350 />} />
          </Route>
          <Route path="/3-51" exact>
            <Title title="componentWillUnmount 메서드에서 이벤트 처리 메서드 해제하기" />
            <Content content={<MyComponent351 />} />
          </Route>
        </Switch>
      </div>
      <Switch>
        <Route path="/3-47" exact>
          <Description desc={desc347} />
        </Route>
        <Route path="/3-48" exact>
          <Description desc={desc348} />
        </Route>
        <Route path="/3-49" exact>
          <Description desc={desc349} />
        </Route>
        <Route path="/3-50" exact>
          <Description desc={desc350} />
        </Route>
        <Route path="/3-51" exact>
          <Description desc={desc351} />
        </Route>
      </Switch>
    </div>
  </Router>
);

export default AppLayout;
