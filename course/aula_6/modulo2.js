var Aluno = exports.Aluno = function(nome){
	this.nome = nome;
}

Aluno.prototype = {
	imprime_nome: function(){
		console.log(this.nome);
	}
}

exports.funcao = function(param){
	console.log('param: ' + param);
}