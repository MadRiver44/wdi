# A Mobile Weather App


#### Gosh! This is getting interesting!
You are now able to pull data from an external source of your choosing and then use it to display stuff on the page! Say WHAAAAAT!

Today we will be building a mobile weather application!

### Step 1: The UI
![Component hierarchy](./mobile_weather_mockup.png)


### Step 2: Build your environment
In your **hw** directory under `weatherAPP` folder create:

1. `index.html`, adding a boiler plate.

2. `style` folder, with a `style.css` file inside.

3. `scr` folder, with an `app.js` file inside.

4. Link all of the files in `index.html`.

### Step 3: Let's check out the API
The Open Weather Data API is a great resource as you start using APIs. But, in order to use it, please follow the steps below:

1. Sign up for a free [Open Weather Map](https://home.openweathermap.org/users/sign_up).

2. After you've signed up, you're given an [API Key](https://home.openweathermap.org/api_keys). Copy that API Key!

3. Now let's open Postman to verify they we have data to work with.  Make a GET request to the following URL in Postman, adding your API key to the end:

```
http://api.openweathermap.org/data/2.5/weather?q=10025,us&appid=YourAPIKeyHere

```

Once that's working, you'll use that url with the API Key to make your xhrRequest or jQuery GET request.

### Step 4: Get to work, you awesome creature!

##### DELIVERABLES
Per the mockup above, your page should have:
- An input field for a user to enter a zipcode.
- A submit button.
- On submit click, a GET request should fetch the weather data from the api for the entered zipcode (using the url with the api key).
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
Have temperature text color turn Blue if under 40, and red if above 90.
