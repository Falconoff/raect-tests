import { Component } from 'react';
import { nanoid } from 'nanoid';

const INITIAL_STATE = {
  firstName: '1',
  lastName: '2',
};

export default class FormTests extends Component {
  state = { ...INITIAL_STATE };

  firstNameId = nanoid(3);
  lastNameId = nanoid(3);

  handleInputChange = evt => {
    const { name, value } = evt.currentTarget;
    console.log('on input change', value);
    this.setState({ [name]: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    console.log('click on Submit');
    console.log('In state:', this.state);

    this.props.onSubmitting(this.state);
    this.formReset();
  };

  formReset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor={this.firstNameId}>Your first name</label>
          <input
            id={this.firstNameId}
            type="text"
            name="firstName"
            value={this.state.firstName}
            onChange={this.handleInputChange}
            required
          ></input>
          <label htmlFor={this.lastNameId}>Your last name</label>
          <input
            id={this.lastNameId}
            type="text"
            name="lastName"
            value={this.state.lastName}
            onChange={this.handleInputChange}
          ></input>

          <p>
            <label>
              junior
              <input type="radio" name="1" value="junior" id="" />
            </label>
            <label>
              middle
              <input type="radio" name="1" value="middle" id="" />
            </label>
            <label>
              senior
              <input type="radio" name="1" value="senior" id="" />
            </label>
          </p>

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
