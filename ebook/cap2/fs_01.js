var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
  //__dirname => dir root da app
  fs.readFile(__dirname + '/index.html', function(err, html){
    res.writeHead(200, 'Content-Type: text/html');
    res.write(html);
    res.end();
  });
});

server.listen(3001, function(){
  console.log('server up.');
})
