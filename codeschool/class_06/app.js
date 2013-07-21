var socket = require('socket.io');
var express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app)
var io = socket.listen(server);
io.set('log level', 1);

app.use(express.static(__dirname));

app.get('/', function(req, res){
  res.sendfile("/index.html");
});

// messages = [];

// function new_message(data){
//   message = { text: data }
//   save_message(message);
// }

// function save_message(message){
//   messages.push(message);
// }

// function all_messages() {
//   return messages;
// }

io.sockets.on('connection', function(client){
  console.log("cliente conectado...");
  client.on('join', function(name){
    client.set('nickname', name);
    console.log('nick: ', name)
  });

  //disparando o evento 'hello'...
  client.emit('hello', { hello: 'welcome to chat!' });
  
  //registrando um evento...
  client.on('new-message', function(data){
    console.log("Mensagem vinda do cliente: " + data);
    //envia a mensagem pra todos os clientes pelo: broadcast
    client.get('nickname', function(err, name) {
      msg = name + ": " + data
      client.broadcast.emit('chat', msg);
    });
  });




});  

server.listen(8001);