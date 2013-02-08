var Geladeira      = require('./geladeira');
var Liquidificador = require('./liquidificador');
var Armario        = require('./armario');

var geladeira      = new Geladeira();
var liquidificador = new Liquidificador();
var armario        = new Armario();

//quando algo disparar o evento 'item disponivel', executa o callback
geladeira.on('item disponivel', function(fruta){
  console.log('item : ' + fruta);  
  liquidificador.espremer(fruta);
});

liquidificador.on('espremido', function(suco) {
  console.log('espremi o suco de ' + suco); 
  armario.pegar_item('copo');    
});

armario.on('item disponivel', function(copo) {
  console.log('peguei o copo');
  copo.servir(liquidificador.suco);
});


geladeira.pegar_item('laranja');
