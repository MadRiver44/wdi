import React from 'react';

class Input extends React.Component {

  createTweed(event) {
    event.preventDefault();
    const tweed = {
      content: this.content.value,
    }
    this.props.addTweed(tweed);
    this.addTweedForm.reset();
  }

  render() {
    return (
      <form ref={(input) => this.addTweedForm = input} className="message-edit" onSubmit={(e) => this.createTweed(e)}>
          <textarea ref={(input) => this.content = input} >
          </textarea>
        <button type="submit"> Add Tweed </button>
      </form>
    )
  }
}

export default Input;

/*handleChange(event) {
  let previousState = this.state.whatever;
  this.setState() {
    whatever: event.target.value
  }
} */





