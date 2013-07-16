var Pessoa = module.exports = function(nome, idade){
  this.nome  = nome;
  this.idade = idade;
}
//cria métodos
Pessoa.prototype = {
  imprime_nome: function() {
    console.log('Nome é: %s', this.nome);
  },
  
  imprime_idade: function(){
    console.log('Minha idade é: %s', this.idade);
  },

  maior_idade: function() {
    if(this.idade >= 18)
      console.log('É maior de idade.');
    else
      console.log('É menor de idade.')
  }

}
