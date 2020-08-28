import React, { Component, Props } from 'react';
import { Container } from './styles';
import Form from '../Form';
import Lista from '../Lista';
import axios from 'axios';

export default class Main<T> extends Component {
  state = {
    tasks: [],
  };

  render(): JSX.Element {
    return (
      <Container>
        <Form></Form>
        <Lista tasks={this.state.tasks}></Lista>
      </Container>
    );
  }

  componentDidMount() {
    axios
      .get('/task', {
        baseURL: 'http://localhost:5000/',
      })
      .then((res) => {
        this.setState({
          tasks: res.data.data,
        });
      })
      .catch((err) => console.log(err));
  }
}
