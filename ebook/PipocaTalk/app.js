
/**
 * Module dependencies.
 */

var express = require('express')
  , load   = require('express-load')
var app = express();

// all environments
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname, 'public'));

load('models')
  .then('controllers')
  .then('routes')
  .into(app);

app.listen(3000, function(){
  console.log("UP.");
})