var event_emitter = require('events').EventEmitter;
var evento = new event_emitter();

//evento.on('algum_evento', function(valor){
//  console.log('valor recebido : ' + valor);
//});

//evento.emit('algum_evento', 'passando alguma coisa');

//var pega_nome = function(nome){
//	console.log('nome => ' + nome);
//};
//evento.on('nome', pega_nome);
//evento.emit('nome', 'Cezer Filho');

/*
evento.once('evento_unico', function(){
  console.log('Só vai uma vez');
});

evento.emit('evento_unico');
evento.emit('evento_unico');
*/