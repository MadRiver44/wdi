$(function() {

  // Short Hand
  /*  $.get("http://swapi.co/api/people/1/", function(data) {
          $('#container').html('<p> Name: ' + data.name + '</p>');
          $('#container').append('<p>Eye Color : ' + data.eye_color + '</p>');
          $('#container').append('<p> Gender: ' + data.gender + '</p>');
      $.each(data, function(key, value) {
        $('#container').append(`<p><strong>${key}</strong>: ${value}</p>`);
      });
      console.log(data)
    });
  */


  // Using the core $.ajax() method
  $.ajax({

      // The URL for the request
      //url: "http://swapi.co/api/starships/5/",
      url: "http://reqres.in/api/users?page=2",

      // The data to send (will be converted to a query string)
      data: {
        id: 123
      },

      // Whether this is a POST or GET request
      type: "GET",

      // The type of data we expect back
      dataType: "json",
    })
    // Code to run if the request succeeds (is done);
    // The response is passed to the function
    .done(function(data) {
      $.each(data, function(key, value) {
        $('#container').append(`<p><strong>${key}</strong>: ${value}</p>`);
      });
    })
    // Code to run if the request fails; the raw request and
    // status codes are passed to the function
    .fail(function(xhr, status, errorThrown) {
      alert("Sorry, there was a problem!");
      console.log("Error: " + errorThrown);
      console.log("Status: " + status);
      console.dir(xhr);
    })
    // Code to run regardless of success or failure;
    .always(function(xhr, status) {
      alert("The request is complete!");
    })
    /*  $.getJSON('http://swapi.co/api/people/1/', function(data) {
        $('#container').html('<p> Name: ' + data.name + '</p>');
        $('#container').append('<p>Eye Color : ' + data.eye_color + '</p>');
        $('#container').append('<p> Gender: ' + data.gender + '</p>');
        console.log(data)
      });
    */

  /*  $.ajax({
      dataType: 'json',
      url: 'http://swapi.co/api/people/1/',
      success: function(data) {
        console.log('data', data);
        $('#container').text(data);
      }

    });*/
})