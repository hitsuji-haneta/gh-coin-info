import React from 'react';
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

const App = () => (
  <Wrapper>
    <LiveData />
  </Wrapper>
);

export default App;
