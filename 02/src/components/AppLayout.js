import React from 'react';
import {
  BrowserRouter as Router, Link, Route, Switch,
} from 'react-router-dom';
import Content from './Content';
import Description from './Description';
import Title from './Title';
import { sData } from './study/data';

console.log(sData);

const AppLayout = ({ children }) => (
  <Router>
    <div className="wrapper">
      <nav className="navigation box-style">
        <h2>Link</h2>
        <ul>
          <li><Link to="/">Home</Link></li>
          {sData.map((v) => (
            <li><Link to={v.path}>{v.title}</Link></li>
          ))}
        </ul>
      </nav>
      <div className="container box-style">
        <Switch>
          <Route path="/" exact>
            {children}
          </Route>
          {sData.map((v) => (
            <Route path={v.path} exact>
              <Title title={v.title} />
              <Content content={v.content} />
            </Route>
          ))}
        </Switch>
      </div>
      <Switch>
        {sData.map((v) => (
          <Route path={v.path} exact>
            <Description desc={v.desc} />
          </Route>
        ))}
      </Switch>
    </div>
  </Router>
);

export default AppLayout;
