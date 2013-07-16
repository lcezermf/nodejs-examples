var http = require('http');

http.createServer(function(req, res){
	res.writeHead(200);
	res.write('Hello again..');
	res.end();
}).listen(8000);

console.log('server on...')

