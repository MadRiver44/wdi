import React, { Component } from 'react';

class CurrentMessageDisplay extends Component {
  render() {
    return (
      <div className="currentMessageDiv">
        <h1>Title: {this.props.title}</h1>
        <h3>Author: {this.props.author}</h3>
        <p>Message: {this.props.message}</p>
      </div>
    );
  }
}

export default CurrentMessageDisplay;
