console.log('JS is working!');

const xhrRequest = new XMLHttpRequest();
xhrRequest.open('GET', 'http://reqres.in/api/users?page=2');
xhrRequest.send();

xhrRequest.onreadystatechange = function() {
  if (xhrRequest.readyState === 4 && xhrRequest.status === 200) {



    let parseData = JSON.parse(xhrRequest.responseText);
/*    let eveData =
    let*/
      /*console.log(xhrRequest.responseText);*/
      console.log(parseData.data[0].first_name);
/*      console.log(parseData.mass);
      console.log(parseData.eye_color);*/
      document.getElementById('info').innerHTML = parseData.data[0].first_name;
  }
}



/*##GOAL:
Create a list of users with **"JUST"** thier associated avatar image.
Make sure the avatar image is clickable.
When you click on the avatar image, a section of the page
should display the user's details.*/
