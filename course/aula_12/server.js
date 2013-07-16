var websocket_server = require('ws').Server;
var wss = new websocket_server({ port: 8080});

console.log('...');
// conecta e receber o objeto WebSocket do usuário
wss.on('connection', function(ws) {
	console.log('cliente: %s', ws);
	
	wss.on('message', function(message) {
		console.log('mensagem: %s', message);
	});

	wss.send('mensagem do servidor');

	wss.on('close', function() {
		console.log('cliente desconectado...');
	});
});