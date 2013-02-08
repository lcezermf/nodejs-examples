var Geladeira      = require('./geladeira');
var Liquidificador = require('./liquidificador');
var Armario        = require('./armario');

var geladeira      = new Geladeira();
var liquidificador = new Liquidificador();
var armario        = new Armario();

geladeira.pegar_item('laranja', function(fruta){
  liquidificador.espremer(fruta, function(suco){
    console.log('suco de : ' + suco);
    armario.pegar_item('copo', function(copo){
      copo.servir(suco, function(){
        console.log('suco pronto...')        
      });
    });      
  });  
});
