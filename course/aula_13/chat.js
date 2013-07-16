var connect = require('connect');
var http = require('http');
var sio  = require('socket.io')

var app = connect(
	connect.favicon()
	, connect.logger()
	, connect.static(__dirname, + '/public')
);

var server = http.createServer(app);
var io = sio.listen(server);

server.listen(8001);
console.log('server online...');

var mensagens = [];

function armazenar_msg(nick, mensagem){
	var msg = {
		hora: new Date().toLocaleTimeString(),
		name: nick,
		texto: mensagem
	};
	mensagens.push(msg);
	return msg;
}

function enviar_mensagem(client){
	mensagens.forEach(function(msg) {
		client.emit('mensagem', msg);
	});
}


io.sockets.on('connection', function(socket) {
	console.log('entrou o usuário');

	socket.on('set_nick', function(nick) {
		console.log('nick: %s', nick);
		socket.set('nick', nick, function() {
			//emit o evento ready dizendo que o nick foi setado...
			socket.emit('ready');
			enviar_mensagem(socket);
		});
	});

	socket.on('mensagem', function(mensagem){
		//joga no log a msg que o cliente mando, no log do sv
		console.log('mensagem do cliente pro servidor: %s', mensagem);
		socket.get('nick', function(err, nick) {
			var msg = armazenar_msg(nick, mensagem)
			//manda a mensagem para todos
			io.sockets.emit('mensagem', msg);
		});
	});
});