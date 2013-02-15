var http = require('http');
var fs   = require('fs');

http.createServer(function(req, res) {
  var leitura = fs.createReadStream('./arquivo.txt')
  leitura.setEncoding('utf8');
  leitura.on('data', function(data) {
    console.log('pegando dados...');
    res.write(data);
    console.log(data);
  });

  leitura.on('end', function() {
    res.end();
  });

}).listen(8000);
