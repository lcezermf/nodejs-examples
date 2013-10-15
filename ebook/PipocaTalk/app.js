
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

const KEY = 'PipocaTalk.sid', SECRET = 'batata8';
var cookie = express.cookieParser(SECRET)
  , store = new express.session.MemoryStore()
  , sessOpts =  { secret: SECRET, key: KEY, store: store }
  , session = express.session(sessOpts);

// all environments
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.cookieParser('PipocaTalk'));
app.use(express.session());
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(__dirname, 'public'));

io.set('authorization', function(data, accept){
  cookie = (data, {}, function(err){
    var sessionID = data.signedCookies[KEY];
    store.get(sessionID, function(err, session){
      if(err || !session){
        accept(null, false);
      }else{
        data.session = session;
        accept(null, true);
      }
    });
  });
});

load('models')
  .then('controllers')
  .then('routes')
  .into(app);

load('sockets')
  .into(io);

server.listen(3000, function(){
  console.log("UP.");
});