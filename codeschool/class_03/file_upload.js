var fs = require('fs');
var http = require('http');

http.createServer(function(req, res){
	var fileBytes = req.headers['content-length'];
	var uploadedBytes = 0;

	req.on('data', function(chunk) {
		uploadedBytes += chunk.length;
		var progress = (uploadedBytes / fileBytes) * 100;
		res.write("progress: " + parseInt(progress, 10) + "%\n");
	});

	req.on('end', function(){
		res.write("\nuploaded!");
	})

}).listen(8080);

console.log("server on...\n")