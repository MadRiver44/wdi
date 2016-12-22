console.log('JS working!');

/*let findLocation = function() {  // add address parameter back in
  const xhrRequest = new XMLHttpRequest();
  xhrRequest.open('GET', `https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyAkbf4TJm4YIvN9sUDC2twERPh6NBpdbxs`);
  xhrRequest.send();

  xhrRequest.onreadystatechange = function() {
    if (xhrRequest.readyState === 4 && xhrRequest.status === 200) {
       let parseData = JSON.parse(xhrRequest.responseText);
       let latitude = (parseData.results[0].geometry.location.lat);
       let longitude = (parseData.results[0].geometry.location.lng);
       console.log(latitude);
       console.log(longitude);

    }
  }
}

findLocation();*/

let findSatelliteImage = function() {  // add latitude and longitude parameters back in
  const xhrRequest = new XMLHttpRequest();
  xhrRequest.open('GET', `https://api.nasa.gov/planetary/earth/imagery?lon=100.75&lat=1.5&date=2014-02-01&cloud_score=True&api_key=GwYM5QuTqLrtmUlYEkYcdhDabITxhmMRkiJyR5LP`);
  xhrRequest.send();

  xhrRequest.onreadystatechange = function() {
    if (xhrRequest.readyState === 4 && xhrRequest.status === 200) {
       let parseData = JSON.parse(xhrRequest.responseText);
       console.log(parseData);
       // let imageURL = (parseData.  ???   );
       //let imageTarget = document.getElementById('target');

    }
  }
}
findSatelliteImage();
