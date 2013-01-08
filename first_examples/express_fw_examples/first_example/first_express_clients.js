var express = require('express')
var app     = express();

app.configure(function(){
  app.use(express.bodyParser());
  app.use(express.methodOverride());
});

var clientes = []; 

app.get('/', function(req, res){
    html  = '<html><body>';
    html += '<form action="/clientes" method="post">';
    html += '<label>Nome: <input type="text" name="cliente[nome]"></label><br>';
    html += '<label>Idade: <input type="text" name="cliente[idade]"></label><br>';
    html += '<button type="submit">Enviar</button>';
    html += '</form>';
    html += '<br>';
    html += '<h1>Lista de clientes</h1>';
    html += '<ul>';
  
  for(var i = 0; i < clientes.length; i++){
        html += '<li>'+clientes[i].nome+' | '+clientes[i].idade;
        html += '  <a href="/clientes/'+i+'/edit">Editar</a> | ';
        html += '  <a href="/clientes/'+i+'" method="delete">Excluir</a></li>'; 
  }
  
  html += '</ul></body></html>';
  res.send(html);
});

//gravar novo
app.post('/clientes', function(req, res) {
  var cliente = req.body.cliente;
  clientes.push(cliente);
  res.redirect('/');  
});

//chama pagina de edit :get
app.get('/clientes/:id/edit', function(req, res) {
  var id = req.params.id;
  var html  = '<html><body>';
    html += '<h1>Editar dados do cliente: '+clientes[id].nome+'</h1>';
    html += '<form action="/clientes/'+ id + '" method="post">';
    html += '<input type="hidden" name="_method" value="put">'; //força o form para um PUT
    html += '<label>Nome: <input type="text" name="cliente[nome]" value="'+clientes[id].nome+'"></label><br>';
    html += '<label>Idade: <input type="text" name="cliente[idade]" value="'+clientes[id].idade+'"></label><br>';
    html += '<button type="submit">Enviar</button>';
    html += '</form>';
    html += '</html>';
    res.send(html);
});

//edita de fato, usando PUT
app.put('/clientes/:id', function(req, res){
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


app.listen(3001);
console.log('excutando...');
