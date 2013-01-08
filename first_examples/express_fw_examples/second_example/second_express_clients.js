var express = require('express')
var app     = express();

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.set('view options', {layout: false});
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  
});

var clientes = []; 

// Qualquer função que receber os três paramêtros abaixo, serão consideradas como funções de filtros pelo Express.
var validarCampos = function(req, res, next){
    if(!req.body.cliente.nome){
        return next(new Error('Informe o nome do cliente.'));
    }
    if(!req.body.cliente.idade){
        return next(new Error('Informe a idade do cliente.'));
    }
    return next();
}



app.get('/', function(req, res){
    res.render('index', {clientes: clientes});
});

//gravar novo
app.post('/clientes', validarCampos, function(req, res) {
  var cliente = req.body.cliente;
  clientes.push(cliente);
  res.redirect('/');  
});

//chama pagina de edit :get
app.get('/clientes/:id/edit', function(req, res) {
  var id = req.params.id;
  res.render('edit', {cliente: clientes[id], id:id});
});

//edita de fato, usando PUT
app.put('/clientes/:id', validarCampos, function(req, res){
  var id = req.params.id
  clientes[id] = req.body.cliente;
  res.redirect('/');
});

//deleta enviando via DELETE
app.get('/clientes/:id', function(req, res){
    var id = req.params.id;
    clientes.splice(id, 1);
    res.redirect('/');  
});


//colocar por final
app.use(function(req, res, next){
  res.render('404', {status: 404});
});

app.use(function(err, req, res, next){
  res.render('500', {status: 500, error: err});
});


app.listen(3001);
console.log('excutando...');
