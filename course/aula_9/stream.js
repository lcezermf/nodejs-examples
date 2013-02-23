var http = require('http');
var url  = require('url');
var fs   = require('fs');

var server = http.createServer(function(request, response) {
  var request_data = url.parse(request.url);
  var arquivo = __dirname + '/public' + request_data.pathname;

  console.log(arquivo);

  response.end();
});

server.listen(8888);
console.log('server on.');
