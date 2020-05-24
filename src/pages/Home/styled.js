import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Content = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 2rem;
  font-family: sans-serif;
  color: #333;
`;

export const Input = styled.input`
  border: 1px solid #ddd;
  width: 32rem;
  height: 2.5rem;
  padding: 0 0.5rem;
  border-radius: 0.25rem 0 0 0.25rem;

  &:focus,
  &:active {
    outline: none;
    box-shadow: none;
  }
`;

export const Button = styled.button`
  height: 2.6rem;
  width: 8rem;
  border: 1px solid #000;
  background: #000;
  color: #fff;
  border-radius: 0 0.25rem 0.25rem 0;
  cursor: pointer;

  &:focus,
  &:active {
    outline: none;
    box-shadow: none;
  }
`;

export const MessageError = styled.span`
  display: line;
  font-size: 1rem;
  color: #ff3333;
  font-weight: 600;
  margin-top: 1rem;
`;
