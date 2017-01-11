import React from 'react';

class TweedrFeed extends React.Component {
  render() {
    const { tweeds } = this.props;

    return (
      <div className='Tweeds'>
        <br />
        <p>Tweed Placeholder</p>
      </div>
    )
  }
}

export default TweedrFeed;


/*  this.state.tweeds.map((tweed, i) => { return (<li key={i}> {tweed.post} })  */
