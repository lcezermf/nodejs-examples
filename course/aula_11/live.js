var express = require('express');
var app = express();
var ejs = require('ejs');

app.use(express.bodyParser());

app.configure(function () {
  //configura onde estarão as views do projeto.
  app.set('views', __dirname + '/views');

  //qual a engine view vai ser usada
  //app.engine('html', ejs.renderFile);
  app.set('views engine', 'ejs');
});

/*
app.get('/', function(req, res) {
	//Retorna o valor passado no query -> url/?nome=Luiz
  console.log('query: %s', req.query.nome); 
  console.log('body: %s', req.body.nome);
  console.log('params: %s', req.params.nome);
  res.send('terminou');
});

app.get('/:nome', function(req, res) {
  console.log('query: %s', req.query.nome);
  console.log('body: %s', req.body.nome);
  //Retorna o valor passado no params -> url/Luiz
  console.log('params: %s', req.params.nome);
  res.send('terminou');
});

app.post('/', function(req, res){
	console.log('query: %s', req.query.nome);
	//Retorna o valor passado no body por posts
  console.log('body: %s', req.body.nome);
  console.log('params: %s', req.params.nome);
  res.send('terminou');
});
*/

app.get('/', function(req, res) {
  res.render('index');
});

app.listen(8000);
console.log('server online');