console.log('JS working!');

let getWeather = function() {
  let userZip = document.querySelector('input').value;
  const xhrRequest = new XMLHttpRequest();
  xhrRequest.open('GET', `http://api.openweathermap.org/data/2.5/weather?q=${userZip},us&appid=43cb3020d8a9ca504a08851610ffebc1`);
  xhrRequest.send();

  xhrRequest.onreadystatechange = function() {
    if (xhrRequest.readyState === 4 && xhrRequest.status === 200) {

      let parseData = JSON.parse(xhrRequest.responseText);
      let location = (parseData.name);
      let temperature = (parseData.main.temp);
      temperature = (temperature * (9/5) - 459.67);  // T(°F) = T(K) × 9/5 - 459.67
      temperature = Math.round(temperature * 10) / 10;
      let description = (parseData.weather[0].description);
      let high = (parseData.main.temp_max);
      high = (high * (9/5) - 459.67);
      high = Math.round(high * 10) / 10;
      let low = (parseData.main.temp_min);
      low = (low * (9/5) - 459.67);
      low = Math.round(low * 10) / 10;
      let myLocation = document.getElementById('location');
      let myTemperature = document.getElementById('temperature');
      let myDescription = document.getElementById('description');
      let myHigh = document.getElementById('high');
      let myLow = document.getElementById('low');

      if (temperature > 90) {  // if temp is lo/hi change class to blue/red
        myTemperature.className = "red";
      } else if (temperature < 40) {
        myTemperature.className = "blue";
      }

      myLocation.innerHTML = `${location}`;
      myTemperature.innerHTML = `${temperature} &#176;F`;
      myDescription.innerHTML = `${description}`;
      myHigh.innerHTML = `${high} &#176;F`;
      myLow.innerHTML = `${low} &#176;F`;
      console.log(userZip);
    }
  }
}

let myButton = document.getElementById('mySubmitButton');
myButton.addEventListener('click', getWeather);

/*##### DELIVERABLES
- On submit click, a GET request should fetch the weather data from the api for the entered zipcode
(using the url with the api key).
- Then take the data and render the following in the browser:
  * City Name
  * Current Temperature
  * Weather Description
  * Max Temp
  * Min Temp
- This application must be styled as mobile first.
**Please note!**
The API returns the temperature in Kelvin, so you'll have to write code to change this to Fahrenheit.
**BONUS**
Have temperature text color turn Blue if under 40, and red if above 90.*/
