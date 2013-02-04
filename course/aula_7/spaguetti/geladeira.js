function Geladeira() {}

Geladeira.prototype.pegar_algo = function(item, callback) {
  console.log("Modulo > pegando item");
  callback(item);
};

module.exports = Geladeira;