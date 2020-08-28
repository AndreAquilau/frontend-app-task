import React from 'react';
import { Container } from './styles';
import { AiFillPlusCircle } from 'react-icons/ai';

export default function Form(): JSX.Element {
  return (
    <Container>
      <form action="#" className="formulario">
        <input type="text" />
        <button>
          <AiFillPlusCircle className="btn-add"></AiFillPlusCircle>
        </button>
      </form>
    </Container>
  );
}
