console.log('JS is working');

function startGame() {
    var can = document.getElementById('myCanvas');
    var ctx = can.getContext('2d');
    var img = new Image();
    myGameArea.start();
    myGamePiece = new component(10, 10, "red", 10, 10);
}

function component(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    ctx = myGameArea.context;
    ctx.fillStyle = color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
}

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 1024;
        this.canvas.height = 576;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 20);
    },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

function component(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.update = function(){
        ctx = myGameArea.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

function updateGameArea() {
    myGameArea.clear();
    myGamePiece.update();
}

function updateGameArea() {
    myGameArea.clear();
    myGamePiece.x += 1;
    myGamePiece.update();
}

function updateGameArea() {
    //myGameArea.clear();
    myGamePiece.x += 1;
    myGamePiece.update();
}

function updateGameArea() {
    myGameArea.clear();
    myGamePiece.x += 1;
    myGamePiece.update();
}



