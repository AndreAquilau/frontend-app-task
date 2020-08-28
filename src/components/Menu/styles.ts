import styled from 'styled-components';

export const Container = styled.header`
  background-color: #111111;
  padding: 0.8% 3%;
  width: 100vw;

  .menu ul {
    display: flex;
  }

  .menu li {
    color: #fff;
    font-family: sans-serif;
    font-weight: 700;
    font-size: 14px;
    cursor: pointer;
    background-color: #b10dc9;
    padding: 0.5% 1%;
    border-radius: 6px;
    transition: all 0.9s ease-in-out;
  }

  .menu li:hover {
    background-color: #85144b;
  }
`;
