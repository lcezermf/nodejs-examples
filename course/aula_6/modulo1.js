var Aluno = module.exports = function(nome){
	this.nome = nome;
}

Aluno.prototype = {
	imprime_nome: function(){
		console.log(this.nome);
	}
}