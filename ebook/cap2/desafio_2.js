var http = require('http');
var url  = require('url');
var fs   = require('fs');

var return_path_name = function(request){
  return url.parse(request.url).pathname;
}

var diretorio = function(arquivo){
  return __dirname + '/' + arquivo;
}

var roteador = function(path_name){
  var arquivo;
  
  if(path_name == '/' || path_name == '/artigos'){
    arquivo = diretorio('artigos.html');
  }else if(path_name == '/contato'){
    arquivo = diretorio('contato.html');
  }

  if(fs.existsSync(arquivo))
    return arquivo;

  return diretorio('erro.html');
}

var server = http.createServer(function(request, response){
  var path_name = return_path_name(request);
  var pagina = roteador(path_name);

  fs.readFile(pagina, function(err, html){
    response.writeHead(200, 'Content-Type: text/html');
    response.end(html);
  });
});

server.listen(3002, function(){
  console.log('up.');
});