var connect = require('connect');

var server = connect.createServer(
	connect.favicon()
	, connect.logger()
	, connect.static(__dirname  + '/public')
);

server.on('error', function(argument) {
	console.log('error: %s', argument);
})

server.listen(8000);