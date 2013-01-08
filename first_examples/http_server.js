//Carrega HTTP 
var http = require('http');

//Criar serviço http para tratar a requisição
var server = http.createServer(function(request, response){
  //Define parametros de cabeçalho
  response.writeHead(200, {'Content-Type' : 'text/html'});
  //Escreve a mensagem no servidor
  response.write('<html><body><h1>Hello World with NodeJS!</h1></body></html>');
  //Envia para o cliente
  response.end();
});
//Define a porta/server onde a requisiçaõ vai ser efetuada
server.listen(3001, 'localhost');
//Mensagem log
console.log('Servidor Node.js executando...');




