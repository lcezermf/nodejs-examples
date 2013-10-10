
/**
 * Module dependencies.
 */

var express = require('express')
  , app = express()
  , load   = require('express-load')
  , error  = require('./middleware/errors')
  , server = require('http').createServer(app)
  , io     = require('socket.io').listen(server)

io.set('log level', 1);

// all environments
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.cookieParser('PipocaTalk'));
app.use(express.session());
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(__dirname, 'public'));

load('models')
  .then('controllers')
  .then('routes')
  .into(app);

io.sockets.on('connection', function(client){
  client.on('send-server', function(data){
    var msg = "<b>" + data.name + ":</b> " + data.message + "<br />";
    client.emit('send-client', msg);
    client.broadcast.emit('send-client', msg);
  });
});



server.listen(3000, function(){
  console.log("UP.");
});