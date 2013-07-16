var assert = require('assert');

function somar(valor, valor2){
	return valor + valor2;
}

//describe serve pra agredar os testes.. similar a RSpec
describe('somar', function(){
	it('deveria retornar 2 => 1 + 1', function(){
		assert.equal(somar(1, 1), 2);
	});

	it('deveria ser do mesmo tipo (int)', function(){
		assert.strictEqual(somar(1, 1), 2);
	});

});