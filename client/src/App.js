import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const top = () => (
  <div>
    <h1>top</h1>topページです
  </div>
);
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

function App() {
  return (
    <Wrapper>
      <Router>
        <Switch>
          <Route path='/' exact component={top} />
          <Route path='/page1' exact component={page1} />
          <Route path='/page2' exact component={page2} />
          <Route exact component={page404} />
        </Switch>
      </Router>
    </Wrapper>
  );
}

export default App;
