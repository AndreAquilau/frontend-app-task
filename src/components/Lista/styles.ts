import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 3%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  border-radius: 6px;
  padding: 1%;

  h1 {
    color: #111111;
    font-size: 16px;
    font-family: sans-serif;
    font-weight: 700;
    text-align: center;
    padding: 3px;
  }

  tr {
    width: 100%;
    display: grid;
    margin-top: 16px;
    grid-template-columns: 80% 20%;
    border-bottom: 1px solid #111111;
    padding: 3px;
  }

  th {
    color: #111111;
    font-size: 14px;
    font-family: sans-serif;
    font-weight: 700;
  }
  .listRow {
    width: 100%;
    display: grid;
    grid-template-columns: 80% 10% 10%;
  }

  .save {
    display: grid;
    align-content: center;
    justify-content: center;
    background-color: #2ecc40;
    outline: none;
    border: none;
    border-radius: 6px;
    transition: all 1.5s ease-in-out;
    cursor: pointer;
  }

  .btn-save {
    color: #fff;
    font-size: 16px;
  }

  .btn-save:hover {
    color: #f5f5f5;
  }

  .close {
    display: grid;
    align-content: center;
    justify-content: center;
    background-color: #ff4136;
    outline: none;
    border: none;
    border-radius: 6px;
    transition: all 1.5s ease-in-out;
    cursor: pointer;
  }

  .btn-close {
    color: #fff;
    font-size: 16px;
  }

  .btn-close:hover {
    color: #f5f5f5;
  }
`;
