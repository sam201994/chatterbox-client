// YOUR CODE HERE:
var app = {
 
  server: 'https://api.parse.com/1/classes/messages' 

};

app.init = function() {

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

// app.server = function(data) {
//   return data;
// };
app.displayMessage = function () {

};

app.fetch = function() {

  $.ajax({
  // This is the url you should use to communicate with the parse API server.
    url: 'https://api.parse.com/1/classes/messages',
    type: 'GET',
    data: 'json',
    contentType: 'application/json',
    //success: displayMessage
    // error: function (data) {
    //   // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
    //   console.error('chatterbox: Failed to send message', data);
    // }
  });

};

app.clearMessages = function() {
  $('#chats').remove();
};

app.renderMessage = function(message) {

  app.send(message);
  app.fetch();
  // return $('#chats').append('<blink>'+message+'</blink>');



};