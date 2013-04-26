var assert = require('assert');

function soma(num1, num2){
	return num1 + num2;
}

//AssertionError: Soma deveria ser 2
assert.ok(soma(1, 1) == 2, 'Soma deveria ser 2');

//verifica o conteúdo e não o tipo.
//assert.equal(atual, esperado, [msg])
assert.equal(soma(1, 1), '2', 'Soma deveria ser 2');

//verificar o conteúdo e o TIPO
//assert.strictEqual(atual, esperado, [msg])
assert.strictEqual(soma(1, 1), 2, 'Soma deveria ser 2 e tipo int.');

//

var buffer  = new Buffer("Luiz");
var bufferr = new Buffer("Luiz");
//checa o tamanho e se caracteres são iguais
//assert.deepEqual(atual, esperado, [msg])
assert.deepEqual(bufferr, buffer, 'Buffer deveriam ser iguais.');

//

function FuncaoComError(){
	throw new Error("VISH MALUCO !");
}
//ele deveria dar erro.
//se der erro está OK se não ta errado?!
//assert.throws(bloco, Exception, [msg])
assert.throws(function() {
	FuncaoComError();
}, Error, "Deveria dar erro.");

//

function FuncaoSemError(){
	return 1 + 1;
}

assert.doesNotThrow(function() {
	FuncaoSemError();
}, Error, "Não Deveria dar erro.");




















