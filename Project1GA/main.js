console.log('JS is working');
let score = 0;
let fuel = 100;
let round = 1;
let enemies = 1;
let satellites = 1;
document.body.addEventListener("keydown", function(event) {
  if (event.keyCode == 32) {
    shootIt();
  }
});
let outputNewMessages = function() {
  let newRound = document.getElementById('roundSpan');
  let newEnemies = document.getElementById('enemiesSpan');
  let newFuel = document.getElementById('fuelSpan');
  let newScore = document.getElementById('scoreSpan');
  newRound.innerHTML = "";
  newEnemies.innerHTML = "";
  newFuel.innerHTML = "";
  newScore.innerHTML = "";
  newRound.innerHTML = `${round}`;
  newEnemies.innerHTML = `${enemies}`;
  newFuel.innerHTML = `${fuel}`;
  newScore.innerHTML = `${score}`;
};
let addIt = function() {
  const newTarget1 = document.createElement('div');
  const newSatellite = document.createElement('div');
  newTarget1.setAttribute('id', 'target1');
  newTarget1.setAttribute('class', 'target');
  newSatellite.setAttribute('id', 'satellite');
  newSatellite.setAttribute('class', 'satellite');
  const gameBoard = document.querySelector('#game');
  gameBoard.appendChild(newTarget1);
  gameBoard.appendChild(newSatellite);
  outputNewMessages();
}
let shootIt = function() {
  const leftBeam = document.createElement('div');
  const rightBeam = document.createElement('div');
  leftBeam.setAttribute('id', 'leftbeam');
  rightBeam.setAttribute('id', 'rightbeam');
  const gameBoard = document.querySelector('#game');
  gameBoard.appendChild(leftBeam);
  gameBoard.appendChild(rightBeam);
  fuel = fuel - 2;
  outputNewMessages();
  removeIt();
  let laserAudio = new Audio('audio/lasers.mp3');
  laserAudio.play();
  checkIt();
  determineIt();
}
let checkIt = function() {
  const gameBoard = document.getElementById("game");
  let target = document.getElementById('target1');
  let friendly = document.getElementById('satellite');
  el = target.getBoundingClientRect();
  la = friendly.getBoundingClientRect();
  let left = el.left + window.scrollX;
  let laLeft = la.left + window.scrollX;
  let top = el.top + window.scrollY;
  let laTop = la.top + window.scrollY;
  console.log(`laLeft is ${laLeft} and laTop is ${laTop}`);
  if ((left > 582 && left < 622) && (top > 230 && top < 270)) {
    score++;
    enemies--;
    outputNewMessages();
    gameBoard.removeChild(target);
    explodeIt();
    determineIt();
  } else if ((laLeft > 600 && laLeft < 650) && (laTop > 225 && laTop < 265)) {
    satellites = satellites - 1;
    outputNewMessages();
    gameBoard.removeChild(friendly);
    explodeIt();
    determineIt();
  }
}
let removeIt = function() {
  setTimeout(function() {
    const leftBeam = document.getElementById('leftbeam');
    const rightBeam = document.getElementById('rightbeam');
    const gameBoard = document.getElementById("game");
    gameBoard.removeChild(leftBeam);
    gameBoard.removeChild(rightBeam);
  }, 498);
};
var explodeIt = function() {
  outputNewMessages();
  const gameBoard = document.getElementById("game");
  const boom = document.createElement('div');
  boom.setAttribute('class', 'explosion');
  gameBoard.appendChild(boom);
  let explosionAudio = new Audio('explosion.mp3');
  explosionAudio.play();
  setTimeout(function() {
    gameBoard.removeChild(boom);
  }, 990);
}
let startIt = function() {
  score = 0;
  fuel = 100;
  round = 1;
  enemies = 1;
  outputNewMessages();
  addIt();
  repeatIt();
}
var myVar;

function repeatIt() {
  let myVar = setInterval(crosshairCheck, 100);
}
let crosshairCheck = function() {
  console.log('tick');
  let center = document.getElementById("center1");
  let blue = document.getElementById("blue1");
  let red = document.getElementById("red1");
  const gameBoard = document.getElementById("game");
  let target = document.getElementById('target1');
  el = target.getBoundingClientRect();
  let left = el.left + window.scrollX;
  let top = el.top + window.scrollY;
  if ((left > 520 && left < 759) && (top > 181 && top < 340)) {
    center.className = "centerRed";
    blue.className = "blueRed";
    red.className = "redRed";
  } else {
    center.className = "center";
    blue.className = "blue";
    red.className = "red";
  }
};
let determineIt = function() {
  let newFuel = document.getElementById('fuel');
  if (fuel === 0) {
    fuelIt();
  } else if (satellites === 0) {
    lostIt();
  } else if (enemies === 0) {
    winIt();
  } else if (fuel < 25) {
    newFuel.className = "fuelSpanRed";
  } else {
    outputNewMessages();
  }
}
let fuelIt = function() {
  alert("FUEL = 0. YOU LOSE.");
}
let lostIt = function() {
  setTimeout(function() {
    alert("SATELLITE DESTROYED. YOU LOSE.");
  }, 800);
}
let winIt = function() {
    setTimeout(function() {
      alert("ENEMY DESTROYED! YOU WIN!");
    }, 800);
  }
  // Background image adapted from http://codentronix.com/2011/07/22/html5-canvas-3d-starfield/
  // All comments below are mine
var MAX_DEPTH = 64; // depth of field via brightness
var canvas, ctx;
var stars = new Array(128); // This sets # of stars
window.onload = function() {
  canvas = document.getElementById("myCanvas");
  if (canvas && canvas.getContext) {
    ctx = canvas.getContext("2d");
    initStars();
    setInterval(loop, 64); // this sets speed
  }
}

function randomRange(minVal, maxVal) {
  return Math.floor(Math.random() * (maxVal - minVal - 1)) + minVal;
}

function initStars() {
  for (var i = 0; i < stars.length; i++) {
    stars[i] = {
      x: randomRange(-25, 25),
      y: randomRange(-25, 25),
      z: randomRange(1, MAX_DEPTH)
    }
  }
}

function loop() {
  var width = canvas.width;
  var height = canvas.height;
  var halfWidth = canvas.width / 2;
  var halfHeight = canvas.height / 2;
  ctx.fillStyle = "rgb(0,0,0)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  for (var i = 0; i < stars.length; i++) {
    stars[i].z -= 0.2; // increment of each star's position
    if (stars[i].z <= 0) {
      stars[i].x = randomRange(-25, 25);
      stars[i].y = randomRange(-25, 25);
      stars[i].z = MAX_DEPTH;
    }
    var k = 128.0 / stars[i].z;
    var px = stars[i].x * k + halfWidth; // add conditions: keypress = turn (width/height)
    var py = stars[i].y * k + halfHeight;
    if (px >= 0 && px <= 1024 && py >= 0 && py <= 576) {
      var size = (1 - stars[i].z / 32.0) * 5;
      var shade = parseInt((1 - stars[i].z / 32.0) * 255);
      ctx.fillStyle = "rgb(" + shade + "," + shade + "," + shade + ")";
      ctx.fillRect(px, py, size, size);
    }
  }
}
