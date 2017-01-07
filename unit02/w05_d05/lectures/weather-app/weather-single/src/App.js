import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      city: 'City',
      temp: 'temperature',
      description: 'description...',
      minTemp: 'n/a',
      maxTemp: 'n/a',
    };

    this.fetchWeatherData = this.fetchWeatherData.bind(this);
    this.renderWeatherData = this.renderWeatherData.bind(this);
    this.convertTempKtoF = this.convertTempKtoF.bind(this);
  }

  fetchWeatherData() {
    axios.get(`http://api.openweathermap.org/data/2.5/weather?zip=${this.zipInput.value},us&appid=fbe749adbaf22e244655edb6f10e5266`)
    .then((response) => {
      this.renderWeatherData(response.data.name, response.data.main.temp, response.data.weather[0].description, response.data.main.temp_max, response.data.main.temp_min);
    })
    .catch((err) => { console.error(err); });
  }

  renderWeatherData(city, temp, desc, max, min) {
    this.setState({
      city,
      temp: this.convertTempKtoF(temp),
      description: desc,
      maxTemp: this.convertTempKtoF(max),
      minTemp: this.convertTempKtoF(min),
    });
  }

  convertTempKtoF(temp) {
    return ((1.8 * (temp - 273)) + 32).toFixed(1);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to my React Weather App: built with a single component</h2>
        </div>
        <div className="weather-app-container">
          <label>
            Zip code:
            <input type="text" ref={(zipInput) => this.zipInput = zipInput} />
            <button onClick={this.fetchWeatherData}>get weather data</button>
          </label>
          <p id="city">{this.state.city}</p>
          <p id="temp">{this.state.temp}</p>
          <label>
            Description:
            <p id="desc">{this.state.description}</p>
          </label>
          <label>
            Max
            <p id="max-temp">{this.state.maxTemp}</p>
          </label>
          <label>
            Min
            <p id="min-temp">{this.state.minTemp}</p>
          </label>
        </div>
      </div>
    );
  }
}

export default App;

