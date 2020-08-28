import React from 'react';
import { Container } from './styles';
import Menu from '../components/Menu';
import Main from '../components/Main';
export default function Layout(): JSX.Element {
  return (
    <Container>
      <Menu></Menu>
      <Main></Main>
    </Container>
  );
}
