import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash';
import './App.css';
import Footer from './Footer';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topStories: {},
      currentPage: 0
    };
    this.increasePageNumber = this.increasePageNumber.bind(this);
    this.decreasePageNumber = this.decreasePageNumber.bind(this);
  }

  componentDidMount() {
    this.fetchStoryIds();
  }

  fetchStoryIds() {
    axios({
      url: '/topstories.json',
      baseURL: 'https://hacker-news.firebaseio.com/v0',
      method: 'GET'
    }).then((response) => {
      this.setState({
        error: false,
        topStories: _.zipObject(_.take(response.data, 100), undefined)
        // ^^^ only store the first 100 stories to avoid tooooo many requests
        // use the 100 story ids as keys (property names) for a `topStories`
        // object stored in the state. The values of this object will be the data
        // for each story. i.e. `this.state.topStories[12345]` will return the
        // story data for the story with id `12345`
      }, this.fetchAllStories);
      // ^^^ the second arguement for set state is a callback function. React will
      // call this function after the state has been set. In this case, we want to
      // fetch all of the story data for each individual story once we have stored
      // the list of ids.
    }).catch((error) => {
      console.log(error);
      this.setState({ error: true });
    });
  }

  fetchAllStories() {
    for(let id of Object.keys(this.state.topStories)) {
      axios({
        url: `/item/${id}.json`,
        baseURL: 'https://hacker-news.firebaseio.com/v0',
        method: 'GET'
      }).then((response) => {
        let stories = this.state.topStories;
        stories[id] = response;
        this.setState({
          topStories: stories,
          error: false,
        });
      }).catch((error) => {
        console.log(error);
        this.setState({ error: true });
      });
    }
  }

  renderStoriesList() {
    let listItems = [];
    let pageSize = 10;
    let startIndex = this.state.currentPage * pageSize;
    let endIndex = startIndex + pageSize;
    let storyIds = Object.keys(this.state.topStories).slice(startIndex, endIndex);

    for(let id of storyIds) {
      // we have to `parseInt` here becasue `Object.keys` converts the keys
      // into strings
      let storyId = parseInt(id);
      if (this.state.topStories[storyId]) {
        listItems.push(
          <li key={storyId} onClick={ () => this.selectStory(storyId) }>
            {this.state.topStories[storyId].data.title}
          </li>
        );
      }
    }


    //forward button looks at state and moves up by one
    //backward button looks at state and moves back by one

    return (
      <ul className="col-md-6">
        {listItems}
      </ul>
    );
  }

  selectStory(storyId) {
    this.setState({ selectedStoryId: storyId });
  }

  renderSelectedStory() {
    let content;

    if (this.state.selectedStoryId) {
      let story = this.state.topStories[this.state.selectedStoryId];
      content = (
        <div className="col-md-6">
          <h1>{story.data.title}</h1>
          <iframe height="400" className="col-xs-12" src={story.data.url}></iframe>
        </div>
      );
    }

    return content;
  }

increasePageNumber(){
let currentPage= this.state.currentPage;
  if (currentPage < 9) {
    this.setState({
      currentPage: currentPage + 1
    })
    console.log(currentPage);
  }
}
decreasePageNumber(){
let currentPage= this.state.currentPage;
  if (currentPage > 0) {
    this.setState({
      currentPage: currentPage - 1
    })
  }
}


  render() {
    return (
      <div className="App .container-fluid">
        <div className="row">
          {this.renderSelectedStory()}
          {this.renderStoriesList()}

        </div>
        <Footer
        onPageIncrease={this.increasePageNumber}
        onPageDecrease={this.decreasePageNumber}
        />
      </div>
    );
  }
}

export default App;
