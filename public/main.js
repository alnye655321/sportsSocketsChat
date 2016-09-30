var socket = io();

socket.on('test-event', function(data){
  //console.log(data);
  $('#messages').append('<li>' + data + '</li>');
})

$(document).on('click', '#myButton', function(event) {
  event.preventDefault();
  const id = $('#m').val();
  socket.emit('foo', id);
  $('#m').val('');
});

$(function() {
  var socket = io();
});

// var socket = io();
// socket.emit('foo', 'Hello Server');
// socket.on('bar', function(data){
//   console.log(data);
// })
