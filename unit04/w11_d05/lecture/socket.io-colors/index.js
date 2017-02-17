// Setup basic express server
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log('Server listening at port %d', port);
});

// Routing
app.use(express.static(__dirname + '/public'));

// Change bg color socket

// io.on is the on connection main event
// inside of it we can specify other event handlers and we
// can emit events to the particular connected client (socket.emit)
// or to all clients (io.emit)

io.on('connection', (socket) => {

  socket.on('change bg color', () => {
    const red = Math.floor(Math.random() * (255 - 0 + 1)).toString(16);
    const green = Math.floor(Math.random() * (255 - 0 + 1)).toString(16);
    const blue = Math.floor(Math.random() * (255 - 0 + 1)).toString(16);

    io.emit('update bg color', {
      color: `#${red}${green}${blue}`,
    });
  });

});
