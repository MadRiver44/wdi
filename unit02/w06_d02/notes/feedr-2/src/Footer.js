import React, { Component, PropTypes } from 'react';
class Footer extends Component {

    render() {
    return (
      <div>
        <button className="backwardBtn" onClick={this.props.onPageDecrease}> Back </button>
        <button className="forwardBtn" onClick={this.props.onPageIncrease}> Forward </button>
      </div>
    );
  }
}

Footer.PropTypes = {
  onPageIncrease: PropTypes.func.isRequired,
  onPageDecrease: PropTypes.func.isRequired
};

export default Footer;
