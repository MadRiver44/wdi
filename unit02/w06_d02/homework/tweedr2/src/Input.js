import React from 'react';

class Input extends React.Component {

  handleChange(event) {  // may need this to capture editTweed
    event.preventDefault();
    // need to include variable for previous state???
    this.setState({
      currentTweed: this.state.messages[event.target.value]
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const tweed = {
      content: this.content.value,
    }
    this.props.addTweed(tweed);
    this.addTweedForm.reset();
  }

  render() {
    return (
      <form
        className='form'
        ref={(input) => this.addTweedForm = input}
        onSubmit={(e) => this.handleSubmit(e)}
      >
          <input
            type='textarea'
            className="textarea"
            ref={(input) => this.content = input}
            placeholder="What's happening?"
          >
          </input>
          <button className='button'>Tweed it!</button>
      </form>
    )
  }
}

export default Input;






