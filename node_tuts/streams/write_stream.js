var fs = require('fs');

var writeStream = fs.createWriteStream('write.txt');

var interval = setInterval(function() {
  writeStream.write("BATATA \n", 1000);  
});

setTimeout(function() {
  clearInterval(interval);
  writeStream.end();
}, 10000);
