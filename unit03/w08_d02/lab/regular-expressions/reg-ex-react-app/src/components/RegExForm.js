import React, { Component } from 'react';

class RegExForm extends Component {
  constructor() {
    super();

    this.state = {
      inputValue: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ inputValue: e.target.value })
  }

  render() {
    const regEx = /EnterRegExpHere/g;
    let validationClass;

    if (regEx.test(this.state.inputValue) === true) {
      validationClass = 'valid-input';
    } else if (this.state.inputValue === '') {
      validationClass = '';
    } else {
      validationClass = 'invalid-input';
    }

    return (
      <div className="reg-ex-form">
        <label>
          Regular expression tester:
          <input
            className={validationClass}
            placeholder="enter password text to test"
            type="text"
            value={this.state.inputValue}
            onChange={this.handleChange}
          />
        </label>
      </div>
    );
  }
}

export default RegExForm;
