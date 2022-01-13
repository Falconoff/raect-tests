// import logo from './logo.svg';
import { Component } from 'react';

import './App.css';

import FormTests from './Form/Form';

class App extends Component {
  formSubmitHandler = data => {
    console.log('form is submitted. Received', data);
  };

  render() {
    return (
      <main>
        <FormTests onSubmitting={this.formSubmitHandler} />
      </main>
    );
  }
}

export default App;
