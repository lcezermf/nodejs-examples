var http = require('http');

var makeRequest = function(message){
	var options = {
		host: 'localhost', post: 8000, path: '/', method: 'POST'
	}

	var request = http.request(options, function(respose){
		response.on('data', function(data){
			console.log(data);
		});
	});

	request.write(message);
	request.end();

};

exports = makeRequest;