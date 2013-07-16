var EventEmitter = require('events').EventEmitter;
var http = require('http');

var logger = new EventEmitter();
//Criar o evento chamado error e aceita um arg
logger.on('error', function(message){
	console.log('ERR:' + message + '\n');
});

var server = http.createServer();
server.on('request', function(req, res){
	//Dispara o erro
	logger.emit('error', 'Caiu a bagaça');
	res.end();
}).listen(8080);
console.log("\n...server on\n")