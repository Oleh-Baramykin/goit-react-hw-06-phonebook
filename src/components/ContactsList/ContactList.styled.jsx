import styled from '@emotion/styled';

export const Button = styled.button`
  font-size: 20px;
  width: 100px;
  height: 35px;
  color: #424040;
  margin-left: 25px;
  border-radius: 10px;
  border-width: 0;
  :hover {
    background-color: #ff5a5a;
    color: white;
    transition: background-color 0.3s;
  }
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
`;

export const Li = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
