//Exemplo 1
//usando function nome.. fica disponivel pra tudo
console.log('Exemplo 1');
console.log(primeira_funcao);
primeira_funcao();
function primeira_funcao(){
	console.log('Ola Primeira Função');
}
//Exemplo 2
//usando var segunda ele só fica disponível após a criação do método
console.log('Exemplo 2');
console.log(segunda_funcao);
segunda_funcao();
var segunda = function(){
	console.log('Olá Segunda funcção');
}
segunda_funcao();