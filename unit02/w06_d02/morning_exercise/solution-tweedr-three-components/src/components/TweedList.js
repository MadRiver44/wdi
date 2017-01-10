//this component will only render the list of tweeds on the page
// it will receive an array of tweeds as a prop from the App

import React, { Component } from 'react';

//make sure that props dataType is matching the dataType this component
//is built to manipulate. (important in the larger applications)
//and set it as required
const propTypes = {
  tweeds: React.PropTypes.array.isRequired
};

class TweedList extends Component {
  render() {
    // map over the ARRAY OF OBJECTS it received as props from the App and
    //render each `tweed` object's `post` property on the page
    let tweedList = this.props.tweeds.map((tweed, i) => {
      return (
        <li key={i}>{tweed.post}</li>
      );
    });
    return (
      // Now lets return that new tweedList array in the browser!
      <ul>
        {tweedList}
      </ul>

    );

  }
}

TweedList.propTypes = propTypes;

export default TweedList;
