import styled from 'styled-components';
import { Field, Form, ErrorMessage } from 'formik';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 12px;
  width: 300px;
  border: 1px solid #000;
  border-radius: 5px;
  background: #129fdb;
  
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 4px;
  text-align: left;
  font-size: 15px;
`;

export const StyledField = styled(Field)`
  padding: 4px;
  width: 250px;
  border: 1px solid #ffffff;
  border-radius: 5px;
  
`;

export const Button = styled.button`
margin-top: 25px;
border-radius: 7px;
cursor: pointer;
color: #black;
border: 1px solid #000000;
border-radius: 5px;
cursor: pointer;
transition: all 0.25s linear 0s;
&:hover,
&:focus {
border: 1px solid #white; background: #1ca105;
transform: scale(1.1);
`;

export const StyledError = styled(ErrorMessage)`
  color: red;
`;
