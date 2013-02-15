var fs = require('fs');

var readStream = fs.createReadStream('./test.log');

readStream.on('error', function(err) { 
 console.log('error: %s', err);
})

readStream.on('data', function(data) {
  console.log('data received : %s', data);  
})

readStream.setEncoding('utf8');

//another way to create callbacks
function end_callback(){
  console.log('end request');  
}

readStream.on('end', end_callback);

