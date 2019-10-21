import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  background-color: white;
  font-size: 1em;
  color: #282c34;
  width: 50vw;
`;

const FormTitle = ({ setTitle }) => {
  return (
    <>
      <Input onChange={e => setTitle(e.target.value)} />
    </>
  );
};

export default FormTitle;
