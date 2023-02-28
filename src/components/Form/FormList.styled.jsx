import styled from '@emotion/styled';
import { Field } from 'formik';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

export const Button = styled.button`
  font-size: 20px;
  font-weight: 700;
  width: 150px;
  height: 35px;
  color: #424040;
  margin-left: 25px;
  border-radius: 10px;
  border-width: 0;
  background-color: #e0e0e0;
  :hover {
    background-color: #01f135;
    color: white;
    transition: background-color 0.3s;
  }
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
`;

export const Fieldset = styled.fieldset`
  width: 400px;
  border-width: 0;
  border-radius: 15px;
  background-color: #9ae5fa;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
`;
export const Input = styled(Field)`
  font-size: 25px;
  margin-top: 10px;
  padding-left: 10px;
  height: 40px;
  border-radius: 10px;
  border-width: 0;
`;
