/*
var http = require('http');
var file_system = require('fs');
var path = require('path');
var util = require('util');

http.createServer(function(request, response) {
  var file_path = path.join(__dirname, 'video.mp4');

  var stat = file_system.statSync(file_path);
  
  var inicio = 0;
  var fim = 0;
  var range = request.headers.range;
  console.log('range -> ' + range);

  if(range){
    inicio = parseInt(range.slice(range.indexOf('bytes=') + 6, range.indexOf('-')));
    fim = parseInt(range.slice(range.indexOf('-') + 1, range.lenght));
  } 

  if(isNaN(fim) || fim == 0)
    fim = stat.size - 1;
 
  if(inicio > fim) return;

  response.writeHead(206, {
    //'Content-Type' : 'audio/mpeg',
    'Content-Type' : 'video/mp4',
    'Content-Length' : stat.size,
    'Content-Range' : 'bytes' + inicio + '-' + fim + '/' + stat.size,
    'Transfer-Encoding' : 'chunked'
  });

  console.log('inicio : ' + inicio);
  console.log('fim : ' + fim);

  var read_stream = file_system.createReadStream(file_path, { flags: 'r', start: inicio, end: fim});

  util.pump(read_stream, response);

  
  read_stream.on('data', function(data){
    //se ja acabou de enviar todos os dados
    var flushed = response.write(data)
    //se não carregou todo da um pause pra não bugar o response
    if(!flushed)
    	read_stream.pause();
  });
  
  //quando ele acabou de enviar tudo da um resume
  response.on('drain', function(){
    read_stream.resume();
  });

  read_stream.on('end', function(){
    response.end();
  });
  

}).listen(2000);
console.log('subindo server...');
*/
var http = require('http'),
    fileSystem = require('fs'),
    path = require('path'),
    util = require('util');

http.createServer(function(request, response) {
//  var filePath = path.join(__dirname, 'musica.mp3');
  var filePath = path.join(__dirname, 'video.mp4'); //Utilize um arquivo de vídeo grande para ficar melhor
  var stat = fileSystem.statSync(filePath);

  var inicio = 0;
  var fim = 0;

  var range = request.headers.range;
  console.log('range ->' + range);

  if (range) {
		inicio = parseInt(range.slice(range.indexOf("bytes=") + 6, range.indexOf("-")));
		fim = parseInt(range.slice(range.indexOf("-") + 1, range.length));    
  }

  if (isNaN(fim) || fim == 0) {
    fim = stat.size-1;
  }

  if (inicio > fim) return;

  response.writeHead(206, {
//    'Content-Type': 'audio/mpeg',
//    'Connection':'close',
    'Content-Type': 'video/mp4',
    'Content-Range':'bytes '+ inicio + '-' + fim + '/' + stat.size,
    'Content-Length': stat.size,
    'Transfer-Encoding':'chunked'

  });
                         
  console.log('inicio:' + inicio);
  console.log('fim:' + fim);
  var readStream = fileSystem.createReadStream(filePath, { flags: 'r', start: inicio, end: fim});

  //Simples
  // readStream.on('data', function(data) {
  //   response.write(data);
  // });

  // readStream.on('end', function() {
  //   response.end();
  // });

  //Controla o write para não saturar o flush no response
  // readStream.on('data', function(data) {
  //   var flushed = response.write(data);
  //   if(!flushed) {
  //     readStream.pause();
  //   }
  // });

  // response.on('drain', function() {
  //   readStream.resume();
  // });

  // readStream.on('end', function() {
  //   response.end();
  // });

  //Optimizada Simples
  util.pump(readStream, response);
})
.listen(2000);
console.log('subindo server...');