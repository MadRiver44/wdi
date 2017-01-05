import React, { Component } from 'react';
import './App.css';
import Widget1 from './Widget1';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 'Generic',
      isActive: true,
      ownedBy: 'General Assembly',
      isItCold: 'Yes it is'
    }

  }

    static defaultProps = {
        language:'Spanish',
        mood: 'Curious'
    }


  changeType(type){
    this.setState({
      type: type
    });
  }

  setStarWarsName(data){
    this.setState({myHero: data});
  }
/*
  componentWillMount() {
    console.log("=====componentWillMount======");
    console.log("this.props: ", this.props);
    console.log("this.state:", this.state);
  }*/

  componentDidMount() {
    // Great to to kick off a method. Called after the render method
    console.log("=====componentDidMount======");
    console.log("this.props: ", this.props);
    console.log("this.state:", this.state);
    axios.get('http://swapi.co/api/people/22/')
    .then((res) => {
      console.log(res.data);
      this.setStarWarsName(res.data.name);
    });
  }
/*    
  componentWillUpdate() {
    console.log("=====componentWillUpdate======");
  }

  componentDidUpdate() {
    console.log("=====componentDidUpdate======");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("=====shouldComponentUpdate======");
    console.log("nextState.type", nextState.type);
    console.log("this.state.type", this.state.type);
    console.log("nextState.type !== this.state.type", nextState.type !== this.state.type);
    return nextState.type !== this.state.type;
  }*/

  render() {
    return (
      <div className="App">
      <h1>The {this.state.type} Section</h1>
        <Widget1 widgetRole={this.state.type} myHero={this.state.myHero}/>
        <Widget1 widgetRole={this.state.type} />
        <Widget1 widgetRole={this.state.type} />
        <Widget1 widgetRole={this.state.type} />

        <button onClick={() => this.changeType('Weather')}>Change to a Weather Widget</button>
        <button onClick={() => this.changeType('Search')}>Change to a Search Widget</button>
        <button onClick={() => this.changeType('Happy')}>Change to a Happy Widget</button>
        <button onClick={() => this.changeType('Photo')}>Change to a Photo Widget</button>

        <input type="text" onChange={(e) => this.changeType(e.target.value)} placeholder="Add something"/>
      </div>
    );
  }
}

export default App;
