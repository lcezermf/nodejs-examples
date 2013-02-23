var http = require('http');
var url  = require('url');
var query_string = require('querystring');
var mongoose = require('mongoose')

//conecta
mongoose.connect('mongodb://localhost/nodejs');

//schema
var CustomerSchema = new mongoose.Schema({
  nome: { type: String, index: false, unique: true },
  idade: { type: Number, index: true }
});
mongoose.model('Customer', CustomerSchema);

var Customer = mongoose.model('Customer');

var server = http.createServer(function(request, response) {
  
  response.on('error', function(err){ 
    console.log('error: %s', err);
  })

  request.setEncoding('utf8');
  request.body = '';

  request.on('data', function(dados) {
    request.body += dados;
  })

  request.on('end', function() {
    console.log('body -> %s', request.body);
    var dados_customer = query_string.parse(request.body);
    console.log('dados : %s', dados_customer);

    //dados já vem como um HASH para criar o novo objeto.
    var customer = new Customer(dados_customer);
    customer.save(function(err) {
      if(err){
        response.end(err);
        return;         
      }
      console.log('salvo com sucesso..');
      response.end('salvo com sucesso..!');
    });
  });
});

server.listen(8888);

console.log('server on = localhost:8888')



