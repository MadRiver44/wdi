import React from 'react';

class Message extends React.Component {
  render() {
    const { details } = this.props;

    return (
      <li className="message">
        <h3 className="message-title">
          {details.title}
          <span className="message-author">{details.author}</span>
        </h3>
        <p>{details.content}</p>
      </li>
    )
  }
}

Message.propTypes = {
  details: React.PropTypes.object.isRequired,
};

export default Message;
