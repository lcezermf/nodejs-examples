var http = require('http');
var url  = require('url');
var query_string = require('querystring');

var server = http.createServer(function(request, response) {
  console.log(request.url);

  //pega todas as informações vindas 
  /*
    { 
      search: '?nome=Luiz',
      query: 'nome=Luiz',
      pathname: '/',
      path: '/?nome=Luiz',
      href: '/?nome=Luiz'     
    }
  */
  //opção true entende que já vem fatiado o obj da request
  var request_data = url.parse(request.url, true);
  //console.log(request_data);
  console.log(request_data)
  console.log('nome : %s', request_data.query.nome)

  //pegar parametros
  //var params = query_string.parse(request_data.query);
  //console.log(params);

  response.end();
});

server.listen(8888);
