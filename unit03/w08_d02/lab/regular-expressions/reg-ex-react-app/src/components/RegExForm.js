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
    const regEx = /^[A-L]{7,15}z+z$/g;
    // 1. include either 'hi' or 'bye' = /hi|bye/
    // 2. begin with 'yoyo' = /^yoyo/
    // 3. end with 'bly' = /(bly)$/
    // 4. begin with a string that begins with either an 'a', a 'b', or a 'c'
    //    and is followed by 'BLOOP' where the l
    //    is either uppercase or lowercase = /^(a|b|c)(B)(L|l)(OOP)/ or /^[abc]B[Ll]OOP/
    // 5. end with 1 or more lowercase 'z's followed by 'THE_END' where
    //    each letter can either by uppercase or lowercase = /z+[Tt][Hh][Ee]_[Ee][Nn][Dd]$/
    // 6. Write up a regular expression that matches a string that begins with an uppercase character
    //    between A and L, that is between 7 and 15 characters long,
    //    and that ends with 2 or more lowercase zs.     ^[A-L]{7,15}[z]z+$
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












