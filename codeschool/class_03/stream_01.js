// var http = require('http')

// http.createServer(function(req, res){
// 	res.writeHead(200);
	
// 	req.on('data', function(chunk){
// 		console.log('recebe dados: ' + chunk.toString() + '\n')
// 		res.write('devolvendo dados: ' + chunk + '\n');
// 	});

// 	req.on('end', function(){
// 		res.end("end...\n");
// 	})

// }).listen(8080);


var http = require('http')

http.createServer(function(req, res){
	res.writeHead(200);
	req.pipe(res)
}).listen(8080);