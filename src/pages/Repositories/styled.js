import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  max-width: 991px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 2rem;
  font-family: sans-serif;
  color: #333;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  font-family: sans-serif;
`;

export const ListItem = styled.li`
  margin: 0.5rem 0;
  color: #fff;
  padding: 0.5rem;
  background-color: #000;
`;

export const LinkHome = styled(Link)`
  display: block;
  width: 4rem;
  text-align: center;
  margin: 0.5rem auto;
  padding: 0.25rem;
  border-radius: 0.25rem;
  background-color: #000;
  color: #fff;
  text-decoration: none;
  font-family: sans-serif;
`;
