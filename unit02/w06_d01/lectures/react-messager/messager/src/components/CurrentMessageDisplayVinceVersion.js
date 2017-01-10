import React from 'react';

class CurrentMessageDisplay extends React.Component {
  render() {
    const { currentMessage } = this.props;

    return (
      <div>
        <h1>{currentMessage.title}</h1>
        <h2>{currentMessage.author}</h2>
        <p>{currentMessage.content}</p>
      </div>
    )
  }
}

CurrentMessageDisplay.propTypes = {
  currentMessage: React.PropTypes.object.isRequired,
};

export default CurrentMessageDisplay;
