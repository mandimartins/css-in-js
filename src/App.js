import React, { useState } from 'react';
import { ResetStyle } from './components/globalStyle';
import styled from 'styled-components';

import Input from './components/Input/index';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
    </Wrapper>
  );
}

export default App;
