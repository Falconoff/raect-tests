// import logo from './logo.svg';
import { Component } from 'react';

import './App.css';

import Form from './Form';

class App extends Component {
  formSubmitHandler = data => {
    console.log('form is submitted. Received', data);
  };

  render() {
    return (
      <main>
        <Form onSubmitting={this.formSubmitHandler} />
      </main>
    );
  }
}

export default App;
