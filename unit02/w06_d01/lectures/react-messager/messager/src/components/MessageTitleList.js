import React, { Component } from 'react';

class MessageTitleList extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <select id='selectBox' size="6">
        <option>foo</option>
     {/*  {this.state.messages.map((message, i) => <option key={i} onClick={()=> this.updateMessageDisplay(message, i)}> Job #{i + 1} </option>)}  */}
      </select>
    );
  }
}

export default MessageTitleList;
