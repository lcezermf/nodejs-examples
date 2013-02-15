var net = require('net');

var HOST = '127.0.0.1';
var PORT = 8080;

process.on('uncaughtException', function(err) {
  console.log(err);
});

net.createServer(function (err, conn) {
  if(err) throw err;  
  var printer = '[' + conn.remoteAddress +':'+ conn.remotePort +']'; 
  console.log(printer);
 
  conn.on('error', function(err) {
    console.log(err);
  });

  //quando vier algum dado na request
  conn.on('data', function(data) {
    console.log('data received : %s', data)
  });

  conn.on('end', function() {
    console.log('end connection.')
  });  
  
  conn.on('close', function() {
    console.log('close connection');
  });
  
}).listen(HOST, PORT);

console.log('listening to server on %s:%s', HOST, PORT)
