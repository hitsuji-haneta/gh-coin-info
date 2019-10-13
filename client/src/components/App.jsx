import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import LiveData from './LiveData';

const Wrapper = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
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
    <Router>
      <Switch>
        <Route path='/' exact component={LiveData} />
        <Route path='/page1' exact component={page1} />
        <Route path='/page2' exact component={page2} />
        <Route exact component={page404} />
      </Switch>
    </Router>
  </Wrapper>
);

export default App;
