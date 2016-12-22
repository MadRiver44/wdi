console.log('JS working!');

let getPlanet = function() {
  const xhrRequest = new XMLHttpRequest();
  xhrRequest.open('GET', `http://swapi.co/api/planets/1/`);
  xhrRequest.send();

  xhrRequest.onreadystatechange = function() {
    if (xhrRequest.readyState === 4 && xhrRequest.status === 200) {
      let parseData = JSON.parse(xhrRequest.responseText);
      console.log(parseData);
      //let location = (parseData.name);
    }
  }
}
getPlanet();
