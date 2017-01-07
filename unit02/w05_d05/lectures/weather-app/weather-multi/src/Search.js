import React, { Component } from 'react';

class Search extends Component {
  render() {
    return (
      <div>
        <label>
          Zip code:
          <input type="text" ref={(zipInput) => this.zipInput = zipInput} />
          <button onClick={() => this.props.fetchWeatherData(this.zipInput.value)}>get weather data</button>
        </label>
      </div>
    );
  }
}

/*Search.propTypes = {
  fetchWeatherData: React.PropTypes.function.isRequired
};*/

export default Search;
