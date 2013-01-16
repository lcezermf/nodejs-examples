var stream = require('stream');
var stream_saida = new stream.Stream();

//seta o stream para escrita
stream_saida.writable = true;

stream_saida.write = function(chunk, encoding){
	this.emit('data', new Buffer(chunk, encoding));
};

stream_saida.on('data', function(data){
	console.log('Dados recebidos > ' + data);
});

stream_saida.write('Cezer', 'utf-8');

/*
//seta o stream para leitura
var stream_entrada = new stream.Stream();
stream_entrada.pipe(stream_saida);

stream_entrada.on('resume', function(){
  this.emit('data', 'alguma coisa');
});

stream_entrada.resume();
*/