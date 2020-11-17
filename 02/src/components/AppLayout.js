import React from 'react';
import {
  BrowserRouter as Router, Link, Route, Switch,
} from 'react-router-dom';
import Content from './Content';
import Description from './Description';
import Title from './Title';
import { sData } from './study/data';

const listData = sData.reduce((prev, v) => prev = [
  ...prev,
  ...v.data,
], []);

const AppLayout = ({ children }) => (
  <Router>
    <div className="wrapper">
      <nav className="navigation box-style">
        {/* <h2 className="link-title home"><Link to="/">Home</Link></h2> */}
        {
          sData.map((v, i) => (
            <div key={v.title}>
              {v.title && <h2 className={i === 0 ? 'link-title first' : 'link-title'}>{v.title}</h2>}
              <ul>
                {v.data.map((c) => (
                  <li key={c.path}><Link to={c.path}>{c.title}</Link></li>
                ))}
              </ul>
            </div>
          ))
        }
      </nav>
      <div className="container box-style">
        <Switch>
          <Route path="/" exact>
            {children}
          </Route>
          {listData.map((v) => (
            <Route path={v.path} key={v.path} exact>
              <Title title={v.title} />
              {v.content && <Content content={v.content} />}
            </Route>
          ))}
        </Switch>
      </div>
      <Switch>
        {listData.map((v) => (
          <Route path={v.path} key={v.path} exact>
            {v.desc && <Description desc={v.desc} />}
          </Route>
        ))}
      </Switch>
    </div>
  </Router>
);

export default AppLayout;
