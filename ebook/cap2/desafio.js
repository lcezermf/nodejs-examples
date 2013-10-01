var http = require('http');
var fs = require('fs');
var url = require('url');

var diretorio = function(arquivo){
  return __dirname + '/' + arquivo;
}

var rotear = function(pathname){
  var arquivo;
  if(pathname == '/' || pathname == '/artigos'){
    arquivo = diretorio('artigos.html')
  }else if(pathname == '/contato'){
    arquivo = diretorio('contato.html')
  }else{
    arquivo = diretorio('erro.html')
  }

  if(fs.existsSync(arquivo))
    return arquivo;

  return diretorio('erro.html');
}

var server = http.createServer(function(request, response){
  var pathname = url.parse(request.url).pathname;
  var pagina = rotear(pathname);

  fs.readFile(pagina, function(err, html){
    response.writeHead(200, 'Content-Type: text/html');    
    response.end(html);
  });
});

server.listen(3001, function(){
  console.log('server up.');
});