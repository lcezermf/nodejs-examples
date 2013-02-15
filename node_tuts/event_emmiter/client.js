var net    = require('net');

var HOST = '127.0.0.1';
var PORT = 8080;

var client = new net.Socket();

client.on('error', function(err) {
  console.log('error : %s', err)
});

client.connect(PORT, HOST, function() {
  console.log('connect to %s:%s', HOST, PORT);
  client.write("I WIN");
});

//quando client envia dados..
client.on('data', function(data) {
  console.log('data send : %s', data);
})

client.on('close', function(){
  console.log('close connection');
});
