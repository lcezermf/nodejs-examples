var util = require('util')
var EventEmitter = require('events').EventEmitter;

function Armario() {
  EventEmitter.call(this);
}

util.inherits(Armario, EventEmitter);

Armario.prototype.copo = {
  servir: function(suco){
    console.log('servir o suco');
    setTimeout(function(){
      console.log('servindo...');       
    }, 1000)
  }  
}

Armario.prototype.pegar_item = function(item) {
  var self = this;  
  console.log('pegando copo no armário');
  setTimeout(function(){
    self.emit('item disponivel', self.copo)     
  }, 1000) 
}

module.exports = Armario;
