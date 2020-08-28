import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  .formulario {
    width: 45vw;
    display: grid;
    grid-template-columns: 90% 10%;
    grid-column-gap: 6px;
  }

  input {
    padding: 1.5%;
  }

  button {
    display: grid;
    align-content: center;
    justify-content: center;
    background-color: #b10dc9;
    outline: none;
    border: none;
    border-radius: 6px;
    transition: all 1.5s ease-in-out;
  }

  button:hover {
    background-color: #85144b;
    cursor: pointer;
  }

  .btn-add {
    color: #fff;
    font-size: 16px;
  }

  .btn-add:hover {
    color: #f5f5f5;
  }
`;
