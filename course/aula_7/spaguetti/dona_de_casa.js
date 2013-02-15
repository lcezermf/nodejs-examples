var util = require('util')
var EventEmitter = require('events').EventEmitter;

var Geladeira      = require('./geladeira');
var Liquidificador = require('./liquidificador');
var Armario        = require('./armario');

function DonaDeCasa(){
  EventEmitter.call(this);  
}

util.inherits(DonaDeCasa, EventEmitter);

DonaDeCasa.prototype.fazer_suco = function(fruta){
  var self = this;
 
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
    //dispara o evento e retorna o suco
    self.emit('suco pronto', liquidificador.suco);
  });

  geladeira.pegar_item(fruta);    
};

module.exports = DonaDeCasa

