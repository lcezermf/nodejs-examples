var util = require('util')
var EventEmitter = require('events').EventEmitter;

function Geladeira() {
  EventEmitter.call(this);
}

util.inherits(Geladeira, EventEmitter);

//self.emit('item disponivel') -> dispara o evento
Geladeira.prototype.pegar_item = function(item){
  var self = this;
  console.log('pegando item na geladeira : ' + item);
  setTimeout(function(){ self.emit('item disponivel', item);}, 2000);  
};

module.exports = Geladeira;

