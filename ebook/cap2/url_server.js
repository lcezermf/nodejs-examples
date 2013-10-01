var http = require('http');
var url = require('url');

var server = http.createServer(function(req, res){
  res.writeHead(200, { 'Content-Type':'text/html' });
  res.write('<h1>Hello Query String</h1>');
  var result = url.parse(req.url);

  for(var key in result.query){
    res.write("<h4>" + key + ": " + result.query[key] + "</h2>")
  }

  res.end();
});

server.listen(3001, function(){
  console.log('Server up.');
});