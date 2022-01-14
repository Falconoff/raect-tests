import { Component } from 'react';
import { nanoid } from 'nanoid';
import { FormField, RadioBoxes, Button } from './Form.styled';

const INITIAL_STATE = {
  firstName: '1',
  lastName: '2',
  experience: 'middle',
  agreement: false,
};

export default class Form extends Component {
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

  handleAgreeChange = evt => {
    console.log('check - evt.currentTarget.value:', evt.currentTarget.value);
    console.log(
      'check - evt.currentTarget.checked:',
      evt.currentTarget.checked,
    );

    this.setState({ agreement: evt.currentTarget.checked });
  };

  formReset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    return (
      <FormField>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor={this.firstNameId}>Your first name </label>
          <input
            id={this.firstNameId}
            type="text"
            name="firstName"
            value={this.state.firstName}
            onChange={this.handleInputChange}
            required
          ></input>

          <br />
          <label htmlFor={this.lastNameId}>Your last name </label>
          <input
            id={this.lastNameId}
            type="text"
            name="lastName"
            value={this.state.lastName}
            onChange={this.handleInputChange}
          ></input>

          <RadioBoxes>
            <label>
              junior
              <input
                type="radio"
                name="experience"
                value="junior"
                checked={this.state.experience === 'junior'}
                onChange={this.handleInputChange}
                id=""
              />
            </label>
            <label>
              middle
              <input
                type="radio"
                name="experience"
                value="middle"
                checked={this.state.experience === 'middle'}
                onChange={this.handleInputChange}
                id=""
              />
            </label>
            <label>
              senior
              <input
                type="radio"
                name="experience"
                value="senior"
                checked={this.state.experience === 'senior'}
                onChange={this.handleInputChange}
                id=""
              />
            </label>
          </RadioBoxes>

          <label>
            <input
              type="checkbox"
              name="agreement"
              checked={this.state.agreement}
              onChange={this.handleAgreeChange}
              id=""
            />{' '}
            I agree
          </label>

          <Button type="submit" disabled={!this.state.agreement}>
            Submit
          </Button>
        </form>
      </FormField>
    );
  }
}
