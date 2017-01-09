import React from 'react';

class AddMessageForm extends React.Component {
  createMessage(event) {
    event.preventDefault();

    const message = {
      author: this.author.value,
      title: this.title.value,
      content: this.content.value,
    }

    this.props.addMessage(message);
    this.addMessageForm.reset();
  }

  render() {
    return (
      <form ref={(input) => this.addMessageForm = input} className="message-edit" onSubmit={(e) => this.createMessage(e)}>
        <input ref={(input) => this.author = input} type="text" placeholder="Author Name" />
        <input ref={(input) => this.title = input} type="text" placeholder="Title" />
        <textarea ref={(input) => this.content = input} placeholder="Content" ></textarea>
        <button type="submit">+ Add Message</button>
      </form>
    )
  }
}

AddMessageForm.propTypes = {
  addMessage: React.PropTypes.func.isRequired
}

export default AddMessageForm;
