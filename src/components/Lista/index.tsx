import React, { Props as P } from 'react';
import { Container } from './styles';
import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai';
export interface Props<T> extends P<T> {
  tasks: any[];
}
export default function Lista<T>(props: Props<T>) {
  const elJSX = props.tasks.map((obj: any) => {
    console.log(obj.estado);
    if (!obj) {
      return <></>;
    }
    if (!obj.estado) {
      return (
        <tr className="listRow" key={obj.id}>
          <td>{obj.descricao}</td>
          <td>
            <button className="save">
              <AiOutlineCheck className="btn-save"></AiOutlineCheck>
            </button>
          </td>
          <td>
            <button className="close">
              <AiOutlineClose className="btn-close"></AiOutlineClose>
            </button>
          </td>
        </tr>
      );
    }
    if (obj.estado) {
      return (
        <tr className="listRow" key={obj.id}>
          <td>{obj.descricao}</td>
          <td>
            <button className="save">editar</button>
          </td>
          <td>
            <button className="close">
              <AiOutlineClose className="btn-close"></AiOutlineClose>
            </button>
          </td>
        </tr>
      );
    }
  });

  return (
    <Container>
      <h1>Lista de Tarefas</h1>
      <table>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Opções</th>
          </tr>
        </thead>
        <tbody>
          {React.Children.map(elJSX, (child) => {
            return React.cloneElement(child as React.ReactElement);
          })}
        </tbody>
      </table>
    </Container>
  );
}
