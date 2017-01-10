//this component is being fully manipulated from the App.
//The role of this component is to accept user input, and communicate it back to the App.
//As you can see, it DOES NOT HAVE state.

import React, { Component } from 'react';
//this component Accepts the following props from the App
// so it can manupulate it and the App also `knows` about the changes

// Now you COULD declare the methods within this component as well,
//this is just the path we decided to follow

const propTypes = {
  //---the value of the tweed(initially, just an empty string)
  inputValue: React.PropTypes.string.isRequired,
  //---two methods for handling change and submit
  handleChange: React.PropTypes.func.isRequired,
  handleSubmit: React.PropTypes.func.isRequired
};
//`inputValue`, `handleChange`, `handleSubmit` variable names have to match
//the variable names that you are passing down from the App as props


class Input extends Component {
  render() {
    //render just utilizes properties and methods it received from the App
    // This is doing the same thing as the one-component solution, but the methods/data being used
    // Are now labeled props because it is being sent from the App Component
    return (
      <form onSubmit={this.props.handleSubmit}>
        <input
          type="text"
          id="tweedr-input"
          value={this.props.inputValue}
          onChange={this.props.handleChange}
        />
        <input
          type="submit"
          id="button"
          value="Tweed It!"
        />
      </form>
    );
  }
}

Input.propTypes = propTypes;

export default Input;
