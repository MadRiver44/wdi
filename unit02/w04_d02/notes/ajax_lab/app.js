console.log('JS is working!');

const xhrRequest = new XMLHttpRequest();
xhrRequest.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q=10025,us&appid=43cb3020d8a9ca504a08851610ffebc1');
xhrRequest.send();

/*'http://api.openweathermap.org/data/2.5/weather?q=10025,us&appid=43cb3020d8a9ca504a08851610ffebc1'
'https://reqres.in/api/users?page=2'*/

xhrRequest.onreadystatechange = function() {
  if (xhrRequest.readyState === 4 && xhrRequest.status === 200) {
    let parseData = JSON.parse(xhrRequest.responseText);
      console.log(xhrRequest.responseText);
      /*console.log(parseData.data[0].first_name);*/
      /*document.getElementById('info').innerHTML = parseData.data[0].first_name;*/
  }
}
