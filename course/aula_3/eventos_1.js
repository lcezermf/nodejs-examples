var http = require('http');
var server = http.createServer();

server.on('request', function(request, response) {
  console.log('aconteceu um request');
  
  request.on('data', function(chunck) {
    console.log('chegaram dados :' + chunck);
  });

  request.on('end', function() {
    console.log('fim de requisição.');
    response.end
  });
});
console.log('listeners: ' + server.listeners('request'));

server.listen(8888);
console.log('subindo server em http://localhost:8888...');