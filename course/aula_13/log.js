var connect = require('connect');
var sio     = require('socket.io');
var spawn   = require('child_process').spawn;

var server = connect.createServer(
	connect.favicon()
	, connect.logger()
	, connect.static(__dirname  + '/public')
);

server.listen(8001);
//usa o mesmo server
var io = sio.liste(app);

var tail = spawn('tail', ['-f', './nohup.out']);

tail.stdout.on('data', function(data) {
	io.sockets.send(data.toString('utf8'));
});