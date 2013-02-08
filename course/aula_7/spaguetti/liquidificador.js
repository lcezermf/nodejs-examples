var util = require('util')
var EventEmitter = require('events').EventEmitter;

function Liquidificador() {
  EventEmitter.call(this);
  this.suco = null;
}

util.inherits(Liquidificador, EventEmitter);

Liquidificador.prototype.espremer = function(fruta) {
  var self = this;
  console.log('vou espremer a fruta : ' + fruta);
  setTimeout(function() {
    this.suco = fruta;
    self.emit('espremido', fruta) 
  }, 3000);  
}

module.exports = Liquidificador;
