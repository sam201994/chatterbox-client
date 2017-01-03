// YOUR CODE HERE:
var app = {
  server: 'https://api.parse.com/1/classes/messages'
};

app.init = function() {
  app.fetch();
};

app.send = function(message) {
  // var message = {
  //   username: 'Marcus',
  //   text: 'Happy new year!',
  //   roomname: 'Fantasy suite'
  // };
  $.ajax({
    // This is the url you should use to communicate with the parse API server.
    url: 'https://api.parse.com/1/classes/messages',
    type: 'POST',
    data: JSON.stringify(message),
    contentType: 'application/json',
    success: function (data) {
      console.log('chatterbox: Message sent');
    },
    error: function (data) {
      // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
      console.error('chatterbox: Failed to send message', data);
    }
  });
};
app.renderMessage = function(message) { 
  $('#chats').append('<li> username: ' + message.username + ' message: ' + message.text + ' roomname: ' + message.roomname + '</li>');
};

app.fetch = function() {
  $.ajax({
    // This is the url you should use to communicate with the parse API server.
    url: 'https://api.parse.com/1/classes/messages',
    type: 'GET',
    contentType: 'application/json',
    success: function (data) {
      data.results.forEach(function(item, index) {
        debugger;
        app.renderMessage(item);
      });
    },
    error: function (data) {
      // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
      console.error('chatterbox: Failed to send message', data);
    }
  });
};

app.clearMessages = function() {
  $('#chats').empty();
};


app.renderRoom = function (room) {
  $('div #roomSelect').append('<li> Room: ' + room);
};

//$('.submit').on('click', app.send($('#message').val()))
app.init();