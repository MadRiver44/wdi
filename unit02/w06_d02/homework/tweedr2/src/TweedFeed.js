import React, { Component/*, PropTypes*/ } from 'react';
class TweedFeed extends Component {
  /*const { tweeds } = this.props;*/
  render() {
    return (
      <div className='tweedfeed'>
          <br />
          <input type='textarea' className='textarea' placeholder="What's happening?" ></input>
          <br />
          <button className='tweedit'>Tweed it!</button>
          <br className='clearfix'/>
          <br />
          <div className='tweed'>A Sample Tweed</div>
      </div>
    );
  }
}

export default TweedFeed;

 /*{ this.state.tweeds.map((tweed, i) => { return (<li key={i}> {tweed.post} }) } */
