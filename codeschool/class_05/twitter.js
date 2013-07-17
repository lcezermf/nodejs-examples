var express = require('express');
var request = require('request');
var url     = require('url');
var app     = express();

app.get('/tweets/:username', function(request, response){

	var username = request.params.username;

	options = {
		protocol: 'http',
		host: 'api.twitter.com',
		pathname: '/1/statuses/user_timeline.json',
		query: { screen_name: username, count: 10}
	}

	var twitterUrl = url.format(options);
	request(twitterUrl).pipe(response);
});

app.listen(8080);
console.log("start\n")