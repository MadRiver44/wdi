import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div>
        <form className='create'>
          <input
            className="textbox"
            name="name"
            placeholder='Add an event'
            type="text"
            value={this.state.input}
            onChange={this.handleChangeName}
          />
          <input
            className="textbox"
            name="date"
            placeholder=''
            type="date"
            value={this.state.date}
            onChange={this.handleChangeDate}
            />
          <button id="mySubmitButton" type="button"
          onClick={this.createEvent}>Create Event</button>
        </form>
        <div className='container'>
          <div className="read">
          {this.renderEvents()}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;



