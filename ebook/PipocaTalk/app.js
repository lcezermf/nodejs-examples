
/**
 * Module dependencies.
 */

var express = require('express')
  , load   = require('express-load')
  , error  = require('./middleware/errors')
var app = express();

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

app.listen(3000, function(){
  console.log("UP.");
})