import React, { Component } from 'react';
import { BrowserRouter, Match, Miss } from 'react-router';
import axios from 'axios';
import Header from './components/Header';
import Home from './components/Home';
import Contact from './components/Contact';
import PeopleList from './components/PeopleList';
import Person from './components/Person';
import NotFound from './components/NotFound';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      people: [],
    };
  }

  componentDidMount() {
    axios.get('http://swapi.co/api/people/')
    .then((response) => {
      this.setState({ people: response.data.results });
    })
    .catch((err) => { console.error(err); });
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <div className="main">
            <Match
              exactly
              pattern="/"
              component={Home}
            />
            <Match
              exactly pattern="/people"
              component={() =>
                <PeopleList people={this.state.people} />}
            />
            <Match
              exactly
              pattern="/people/:id"
<<<<<<< HEAD
              component={({ params }) =>
                <Person person={this.state.people[params.id - 1]} />}
            />
            <Match
              exactly
              pattern="/contact"
              component={() => <Contact />}
=======
              component={({ params, location }) =>
                // Here we add the peopleLength prop so we can
                // later check to make sure that our id is not
                // greater than the size of our array. We pass the
                // id prop for the same reason.
                <Person
                  peopleLength={this.state.people.length}
                  person={this.state.people[params.id - 1]}
                  id={params.id}
                />
              }
>>>>>>> 1e394d7b663b7583f257262d4a3d905db2805368
            />
            <Miss component={NotFound} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
