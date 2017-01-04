// YOUR CODE HERE:
var app = {
  server: 'https://api.parse.com/1/classes/messages'
};

app.friends = {};

app.init = function() {
  $('.submit').on('click', app.handleSubmit);
 // $('.chat .username').on('click', app.handleUsernameClick);
  $('.newRoom').on('click', app.createNewRoom);

  app.fetch();
  setInterval(app.fetch, 20000);
};

app.send = function(message) {
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

app.fetch = function() {
  $.ajax({
    // This is the url you should use to communicate with the parse API server.
    url: 'https://api.parse.com/1/classes/messages',
    type: 'GET',
    data: { order: '-createdAt'},
    contentType: 'application/json',
    success: function (data) {
      app.clearMessages();
      data.results.forEach(function(item, index) {
        app.renderMessage(item);
      });
    },
    error: function (data) {
      // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
      console.error('chatterbox: Failed to send message', data);
    }
  });
};

app.renderMessage = function(message) { 
  $('#chats').append('<div class="chat" onclick="app.handleUsernameClick()" ><div class="username"  value="' + message.username + '">' + message.username + '</div><div>' + message.text + '</div></div>');
};

app.clearMessages = function() {
  $('#chats').empty();
};

app.renderRoom = function (room) {
  $('div #roomSelect').append('<li> Room: ' + room);
};

app.handleSubmit = function() {
  var message = {
    username: window.location.search.slice(10),
    text: $('#message').val()
  };
  app.send(message);
};


app.handleUsernameClick = function(n) {
  console.log(n);
  // console.log( "here: ", n );
  // app.friends[$('.username').val()] = true;
  // //$('.chat').toggleClass('username');


};

app.createNewRoom = function () {
  var roomname = $('#newRoom').val();
  $('#roomSelect').append('<option>' + roomname + '</option>');
};

app.init();