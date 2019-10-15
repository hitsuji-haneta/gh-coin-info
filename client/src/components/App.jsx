import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import LiveData from './LiveData';
import ProjectList from './ProjectList';

const Wrapper = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(14px + 2vmax);
  color: white;
`;

const page1 = () => (
  <div>
    <h1>page1</h1>1枚目のページです
  </div>
);
const page2 = () => (
  <div>
    <h1>page2</h1>2枚目のページです
  </div>
);
const page404 = () => (
  <div>
    <h1>404</h1>存在しないページです
  </div>
);

const App = () => (
  <Wrapper>
    <LiveData/>
    <Router>
      <Switch>
        <Route path='/' exact component={ProjectList} />
        <Route path='/page2' exact component={page2} />
        <Route exact component={page404} />
      </Switch>
    </Router>
  </Wrapper>
);

export default App;
