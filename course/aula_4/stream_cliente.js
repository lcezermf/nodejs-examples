var http = require('http');

var options = {
	host: 'localhost',
	port: 8888,
	path: '/',
	method: 'POST'
}

var req = http.request(options, function(res){
  console.log('STATUS : ' + res.statusCode);
  console.log('HEADERS : ' + JSON.stringify(res.headers));
  
  res.setEncoding('utf8');
  res.on('data', function(chunk) {
  	console.log('BODY : ' + chunk);
  });

  res.on('end', function(){
    console.log('fim de request.');
  });

});

req.write('alguma coisa\n');
setTimeout(function(){
	req.write('outra coisa \n');
	req.end();
}, 3000);