var http = require('http');
var url = require('url');
// ./ pra pegar do path relativo, já que não é core do Node
var modulo_aluno = require('modulo_aluno');
var query_string = require('querystring');

var server = http.createServer(function(request, response) {
	//querystring -> variavel | query_string -> modulo
	var querystring = query_string.parse(url.parse(request.url).query);
  var aluno = querystring.aluno;
  var mensagem = modulo_aluno(aluno);

	response.writeHead(200, {'Content-Type':'text/plain'});
	response.end(mensagem);
});

server.listen(8001);
console.log('Servidor funcionando!');