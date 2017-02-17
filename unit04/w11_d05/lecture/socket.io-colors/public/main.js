$(function() {
  var socket = io();

  // with socket.io, the client side is pretty straightforward -
  // the socket object will either emit events to the server,
  // or it will act on events being emitted from the server

  $('#change-bg').on('click', function() {
    // when the button is clicked, tell the server so
    socket.emit('change bg color');
  });

  // Whenever the server emits 'update bg color', update the damn thing
  socket.on('update bg color', function(data) {
    $('body').css('background-color', data.color);
  });

});
