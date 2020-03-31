import React from 'react';

import { FormControl, Field, Label } from './styles.js';
const Input = props => {
  return (
    <FormControl>
      <Field
        onChange={props.inputHandle}
        name={props.name}
        placeholder={props.placeholder}
        type={props.type}
        value={props.value}
      ></Field>
      <Label>{props.label}</Label>
    </FormControl>
  );
};

export default Input;
