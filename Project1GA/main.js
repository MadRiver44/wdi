console.log('JS is working');

let score = 0;
let fuel = 100;
let round = 1;

let outputMessage = function(text) {
  let newHTML = document.getElementById('status');
  newHTML.innerHTML = text;
};

// Background image adapted from http://codentronix.com/2011/07/22/html5-canvas-3d-starfield/
// All comments below are mine
    var MAX_DEPTH = 64;  // depth of field via brightness
    var canvas, ctx;
    var stars = new Array(64);  // This sets # of stars
    window.onload = function() {
      canvas = document.getElementById("myCanvas");
      if( canvas && canvas.getContext ) {
        ctx = canvas.getContext("2d");
        initStars();
        setInterval(loop,64); // this sets speed
       }
    }
    function randomRange(minVal,maxVal) {
      return Math.floor(Math.random() * (maxVal - minVal - 1)) + minVal;
    }
    function initStars() {
      for( var i = 0; i < stars.length; i++ ) {
        stars[i] = {
          x: randomRange(-25,25),
          y: randomRange(-25,25),
          z: randomRange(1,MAX_DEPTH)
         }
      }
    }
    function loop() {
      var width = canvas.width;
      var height = canvas.height;
      var halfWidth  = canvas.width / 2;
      var halfHeight = canvas.height / 2;
      ctx.fillStyle = "rgb(0,0,0)";
      ctx.fillRect(0,0,canvas.width,canvas.height);
      for( var i = 0; i < stars.length; i++ ) {
        stars[i].z -= 0.2;  // increment of each star's position
        if( stars[i].z <= 0 ) {
          stars[i].x = randomRange(-25,25);
          stars[i].y = randomRange(-25,25);
          stars[i].z = MAX_DEPTH;
        }
        var k  = 128.0 / stars[i].z;
        var px = stars[i].x * k + halfWidth; // add conditions: keypress = turn (width/height)
        var py = stars[i].y * k + halfHeight;
        if( px >= 0 && px <= 1024 && py >= 0 && py <= 576 ) {
          var size = (1 - stars[i].z / 32.0) * 5;
          var shade = parseInt((1 - stars[i].z / 32.0) * 255);
          ctx.fillStyle = "rgb(" + shade + "," + shade + "," + shade + ")";
          ctx.fillRect(px,py,size,size);
        }
      }
    }




