import React from 'react';

class Tweed extends React.Component {

  render() {
    return (
      <div className='tweedFrame'>
        <br />
        <div className='tweedText'>
        Some default text here
        </div>
        <button className='modifybutton'>Delete</button>
        <button className='modifybutton' >Edit</button>
        <br className='clearfix' />
        <br />
      </div>
    )
  }
}

export default Tweed;

/*This will show edit and delete buttons, as well as text of tweed*/
