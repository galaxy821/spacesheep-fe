import styled from "@emotion/styled";
import { Input, TextField } from "@mui/material";
import * as React from "react";

const LoginInputBlock = styled.div``;

const LoginInputLabel = styled.label``;

const LoginInput = styled.input`
  width: 240px;
  height: 48px;
  border-bottom: none;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.6);
  border: 1px solid #000000;
  box-shadow: #000000 2px 2px 2px;
  transition: all 0.5s;
  padding: 5px 20px;
  &:active {
    box-shadow: #000000 2px 2px 2px inset;
  }
  &:focus {
    box-shadow: #000000 2px 2px 2px inset;
    background: rgba(255, 255, 255, 0.9);
    outline: none;
  }
`;

export const InputForAccount = ({ type }) => {
  return (
    <LoginInputBlock>
      <LoginInputLabel>{type}</LoginInputLabel>
      <LoginInput type={type} name={type} />
    </LoginInputBlock>
  );
};
