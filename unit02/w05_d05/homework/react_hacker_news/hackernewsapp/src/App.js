import React, { Component } from 'react';
import './App.css';
import axios from 'axios';


class App extends Component {
  constructor() {
    super();
    this.blank = "_blank";
    this.state = {
      jobs: [],
      title: '',
      by: '',
      time: '',
      url: ''
  }
  this.getJobListing = this.getJobListing.bind(this);
  this.convertDate = this.convertDate.bind(this);
}

componentDidMount() {
  axios.get(`https://hacker-news.firebaseio.com/v0/jobstories.json?print=pretty `)
  .then((response) => {
    let jobs = response.data;
    this.setState({
      jobs: jobs
    });
  })
  .catch((err) => { console.error(err); });
}


getJobListing(item) {
  axios.get(`https://hacker-news.firebaseio.com/v0/item/${item}.json?print=pretty`)
  .then((response) => {
    let ts = response.data.time.toString();
    console.log(ts); // working
    let x = typeof ts;
    console.log(x); // string
    ts = Number(ts); // cast it to a Number
    console.log(ts); // working
    let y = typeof ts;
    console.log(y); // number
    let date = new Date(ts);
    console.log(date);
    this.setState({
      title: (response.data.title),
      by: (response.data.by),
      time: this.convertDate(response.data.time),
      url: (response.data.url)
    });
  })
  .catch((err) => { console.error(err); });
}

convertDate(timestamp) {
  let ts = timestamp.toString();
  console.log(ts); // working
  let x = typeof ts;
  console.log(x); // string
  ts = ts + '000';
  console.log(ts); // working
  ts = Number(ts); // cast it to a Number
  console.log(ts); // working
  let y = typeof ts;
  console.log(y); // number
  let date = new Date(ts)
  let z = typeof date;
  console.log(z);
  date = date.toString();
  let a = typeof date;
  console.log(a);
  console.log(date);
  return date; // import moment.js to fix???
}

render() {
  return (
    <div className="App">
        <header className="App-header">
          <h1>HackerJobs Listings</h1>
          <p>Get the latest job postings for coders from HackerNews!</p>
        </header>
      <div className='container'>
        <div className='selector'>

        <br />
          <h2>Latest Jobs</h2>
          <form>
            <select id='selectorBox' size="12">
             {this.state.jobs.map((job, i) => <option key={i} onClick={()=> this.getJobListing(job, i)}> Job #{i + 1} </option>)}
            </select>
          </form>
        </div>
        <div>
        <br />
          <h2>Job Details</h2>
          <div className='propertyTable'>
            <div className='property' id='nameDiv'>
              <strong>Job title:</strong>
              <br />
              <br />
              &nbsp; {this.state.title}
            </div>
            <div className='property' id='titleDiv'>
              <strong>Posted by:</strong> &nbsp; {this.state.by}
            </div>
            <div className='property' id='timeDiv'>
              <strong>Post timestamp:</strong> &nbsp; {this.state.time}
            </div>
            <div className='property' id='urlDiv'>
              <strong>Job link:</strong> &nbsp; <a href={this.state.url} target={this.blank}>{this.state.url}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default App;



