# Make your own Google Maps
In this lab we are going to build a front end web app that displays satellite images for different areas given an address. This is going to use the [Google Maps Geocoding API](https://developers.google.com/maps/documentation/geocoding/start) to convert user inputed addresses into `latitude, longitude` coordinates. Then we're going to use the [NASA API](https://api.nasa.gov/api.html) to fetch the satellite image url for the geolocation and display the image on the page.

### `Before committing`: remove your Google API Key from your code

### Steps
**Create your Google Developer Account.**
1. Go to the [Google Developer Console site](https://console.developers.google.com) and set up your account.
2. Visit your dashboard and click the `ENABLE API` button.
3. Search for `Google Maps Geocoding API` and click on the matching search result option.
4. Enable the API. NOTE: This might require you to set up credentials to get an `API KEY`. If so, click the `Credentials` link in the left sidebare and create a credential.

**Get some location data** 
5. Once you have your Google API enabled and have a valid API key, go to your `main.js` file and create a `findLocation` function that takes an `address` string and makes an ajax request to the geocoding api endpoint: `https://maps.googleapis.com/maps/api/geocode/json`. Be sure to check out the documentation (linked in the introduction above) to see what `data` attributes have to be provided in your API request for it to be valid.
6. Add a `console.log` statement to your `findLocation` function to display the response data of your ajax call. Inspect the response object and take note of the latitude / longitude data.
7. Create two global variables ,`latitude` and `longitude`, above your `findLocation` function.
8. Modify your `findLocation` function to assign the `latitude` and `longitude` variables with the values returned by api call.

**Get some satellite images**
9. Go to the [NASA API site](https://api.nasa.gov/index.html#apply-for-an-api-key) and register for an api key.
10. Create a function `findSatelliteImage` that takes two arguements, `latitude` and `longitude` and makes an ajax call to the NASA imagery API endpoint: `https://api.nasa.gov/planetary/earth/imagery` to get the image for a latitue and longitude. Make sure to consult the [NASA API documentation](https://api.nasa.gov/api.html#imagery) to know what data to include in your ajax request for it to be valid.
11. Add a `console.log` statemennt to your `findSatelliteImage` function to inspect the response data.

**Putting it all together**
12. Create a form with a text input for collecting the `address` string.
13. Add a submit handler to the form that will call your `findLocation` function. You will have to modify this function to read the address value from the input instead of having it passed in as a parameter.
14. Now that your form works and you can get location data for an address, use your `findSatelliteImage` function to display the image in the DOM!
15. Add error handling to display an appropriate message when the address provided does not yield any location data.
16. Make it responsive and pretty.
17. Happy Holidays!

### `Before committing`: remove your Google API Key from your code
