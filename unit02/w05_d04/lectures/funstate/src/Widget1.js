import React from 'react';

class Widget1 extends React.Component {

  render() {
    const myParent = this._reactInternalInstance._currentElement._owner._instance.constructor.name;
    if(this.props.widgetRole === 'Photo') {
      this.isPhoto = <img src="http://lorempixel.com/190/130/" alt=""/>
    } else {
      this.isPhoto = "";
    }

    return (
      <div className={this.props.widgetRole}>
      <h1>I am a {this.props.widgetRole} Widget</h1>
      My owner/parent is {myParent} 
      {this.isPhoto}
      {/* <p>{this.props.myHero}</p> */} 
      </div>
    );
  }

  getParent() {
    return this._reactInternalInstance._currentElement._owner._instance.constructor.name;
  };
}

export default Widget1;