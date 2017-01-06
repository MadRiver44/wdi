import React, { Component } from 'react';

class WeatherApp extends Component {
  render() {
    return (
      <div className="weather-app-container">
        <label>
          Zip code:
          <input type="text" ref={(zipInput) => this.zipInput = zipInput} />
          <button onClick={() => this.props.fetchWeatherData(this.zipInput.value)}>get weather data</button>
        </label>
        <p id="city">{this.props.city}</p>
        <p id="temp">{this.props.temp}</p>
        <label>
          Description:
          <p id="desc">{this.props.desc}</p>
        </label>
        <label>
          Max
          <p id="max-temp">{this.props.maxTemp}</p>
        </label>
        <label>
          Min
          <p id="min-temp">{this.props.minTemp}</p>
        </label>
      </div>
    );
  }
}

WeatherApp.propTypes = {
  // fill in the propTypes!
};

export default WeatherApp;
