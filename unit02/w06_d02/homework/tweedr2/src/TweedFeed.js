import React, { Component/*, PropTypes*/ } from 'react';
import Tweed from './Tweed';

class TweedFeed extends Component {
/*  const { tweeds } = this.props;*/
  render() {
    return (
      <div className='tweedfeed'>
        <Tweed />
      </div>
    );
  }
}

export default TweedFeed;

 /*{ this.state.tweeds.map((tweed, i) => { return (<div key={i}> {tweed.post} }) } */

/*          <input type='textarea' className='textarea' placeholder="What's happening?" ></input>
          <button className='tweedit'>Tweed it!</button>*/
