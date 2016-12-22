function getSomeData(num) {
  const xhrRequest = new XMLHttpRequest();
  let userInfo;
  xhrRequest.onreadystatechange = function() {
    if (xhrRequest.readyState === 4 && xhrRequest.status == 200) {
      /*    console.log('this.readyState----->', this.readyState);
          console.log('this.status----->', this.status);
          console.log('this.getAllResponseHeaders()----->', this.getAllResponseHeaders());*/
      document.getElementById('container1').innerHTML = xhrRequest.responseText;
      userInfo = JSON.parse(xhrRequest.responseText);
      console.log(userInfo.data[0].last_name);
    }
  }

  xhrRequest.onerror = function(err) {
    console.log('ERROR!', err)
  }

  //xhrRequest.open('GET', 'http://hipsterjesus.com/api', true);
  xhrRequest.open('GET', `http://reqres.in/api/users`, true);
  xhrRequest.send();
  //console.log(arguments[0])

}

//getSomeData(Math.floor((Math.random() * 100) + 1));
getSomeData();


