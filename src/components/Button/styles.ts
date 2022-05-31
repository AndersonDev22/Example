import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  width: 7rem;
  height: 100%;
  font-weight: 800;
  font-family: 'Raleway', sans-serif;
  text-align: center;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  border: 3px solid #4ba87d;
  padding: 0 20px;
  cursor: pointer;
  color: white;
  font-weight: 900;
  font-size: 16px;
  padding: 10px;
  background: #4ba87d;

  &.button-border {
    color: #4ba87d;
    background: #fff;
  }
`;
