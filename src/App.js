import React, { useState } from 'react';
import { ResetStyle } from './components/globalStyle';

import Input from './components/Input/index';
import Button from './components/Button/index';

import styled from 'styled-components';
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const StyledButton = styled(Button)`
  margin-top: 2rem;
  width: 42rem;
  padding: 1rem 1rem;
  background-color: dodgerblue;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

function App() {
  const [formInput, setFormInput] = useState({
    name: '',
    lastName: '',
    email: '',
    password: '',
  });

  const { name, lastName, email, password } = formInput;

  const inputHandler = (e) => {
    e.preventDefault();
    setFormInput({ ...formInput, [e.target.name]: e.target.value });
  };

  return (
    <Wrapper>
      <ResetStyle></ResetStyle>
      <Input
        inputHandle={inputHandler}
        type="text"
        name="name"
        placeholder="Name"
        label="Name"
        value={name}
      ></Input>
      <Input
        inputHandle={inputHandler}
        type="text"
        name="lastName"
        placeholder="Last Name"
        label="Last Name"
        value={lastName}
      ></Input>
      <Input
        inputHandle={inputHandler}
        type="email"
        name="email"
        placeholder="E-mail"
        label="E-mail"
        value={email}
      ></Input>
      <Input
        inputHandle={inputHandler}
        type="password"
        name="password"
        placeholder="Password"
        label="Password"
        value={password}
      ></Input>
      <StyledButton>Styled button</StyledButton>
    </Wrapper>
  );
}

export default App;
