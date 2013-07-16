// var fs = require('fs');

// var file = fs.createReadStream("readme.md");
// var newFile = fs.createWriteStream("readme_copy.md");

// file.pipe(newFile);

var fs = require('fs');
var http = require('http');

http.createServer(function(req, res){
	var newFile = fs.createWriteStream('readme_copy.md');
	req.pipe(newFile);

	req.on('end', function(){
		res.end("uploaded..\n");
	});

}).listen(8080);