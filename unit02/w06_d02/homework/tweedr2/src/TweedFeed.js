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

/*.map((obj, index) => <Tweed
  key={obj.key}


  />*/