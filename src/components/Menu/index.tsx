import React from 'react';
import { Container } from './styles';

export default function Menu(): JSX.Element {
  return (
    <Container className="cabecalho">
      <nav className="menu">
        <ul>
          <li>Task</li>
        </ul>
      </nav>
    </Container>
  );
}
