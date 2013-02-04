var Geladeira = require('./geladeira');
var geladeira = new Geladeira();

geladeira.pegar_algo('laranja', function(fruta){
	console.log(fruta)
})