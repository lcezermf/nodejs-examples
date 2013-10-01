var http = require('http');

var server = http.createServer(function(req, res){
  res.writeHead(200, { 'Content-Type':'text/html' });
  
  if(req.url == '/'){
    res.write('Home');
  }else if(req.url == '/bemvindo'){
    res.write('Bem vindo');
  }else{
    res.write('Not found.');
  }

  res.end();
});
server.listen(3001, function(){
  console.log('servidor on.');
});