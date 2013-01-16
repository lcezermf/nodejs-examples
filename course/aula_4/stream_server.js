var util = require('util');
var http = require('http');

var server = http.createServer();

server.on('request', function(request, response) {
  console.log('aconteceu um request');
  
  request.on('data', function(data){
    console.log('chegaram dados -> ' + data);
    response.write('Recebi os seus dados > ' + data);
  });

  request.on('end', function(){
    console.log('fim do request');
    response.end('acabou o request, isso é uma resposta');
  });

});

server.listen(8888);
console.log('subindo server em http://localhost:8888');