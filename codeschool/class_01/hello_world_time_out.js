var http = require('http');

http.createServer(function(req, res){
	res.writeHead(200);
	res.write("Doing something...\n");
	setTimeout(function(){
		res.write("done...\n");
		res.end();
	}, 3000);
}).listen(8000);

console.log("server on...\n")

