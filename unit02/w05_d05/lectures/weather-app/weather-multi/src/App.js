import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header.js';
import Search from './Search.js';
import WeatherApp from './WeatherApp.js';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      city: '',
      temp: '',
      description: '',
      minTemp: '',
      maxTemp: '',
    };

    this.fetchWeatherData = this.fetchWeatherData.bind(this);
    this.renderWeatherData = this.renderWeatherData.bind(this);
    this.convertTempKtoF = this.convertTempKtoF.bind(this);
  }

  componentDidMount() {
    axios.get(`http://api.openweathermap.org/data/2.5/weather?zip=90210,us&appid=fbe749adbaf22e244655edb6f10e5266`)
    .then((response) => {
      console.log(response.data.name);
      this.renderWeatherData(response.data.name, response.data.main.temp, response.data.weather[0].description, response.data.main.temp_max, response.data.main.temp_min);
    })
    .catch((err) => { console.error(err); });
  }

  fetchWeatherData(zip) {
    axios.get(`http://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=fbe749adbaf22e244655edb6f10e5266`)
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
        <Header title="React Weather App: built with several components" />
        <Search
          fetchWeatherData={this.fetchWeatherData}

        />
        <WeatherApp
          city={this.state.city}
          temp={this.state.temp}
          desc={this.state.description}
          maxTemp={this.state.maxTemp}
          minTemp={this.state.minTemp}
        />
      </div>
    );
  }
}

export default App;
