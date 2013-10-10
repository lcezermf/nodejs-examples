module.exports = function(app){
  var chat = app.controllers.chat;
  var auth = require('../middleware/authenticator')

  app.get('/chat/:email', auth, chat.index);

}