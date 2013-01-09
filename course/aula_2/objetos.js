function ContaCorrente(nome, sobrenome){
	var saldo = 0;
	return {
		nome_correntista: function() {
			return nome + ' ' + sobrenome;
		},

		depositar: function(valor){
			saldo += valor;
		},
		sacar: function(valor){
			saldo -= valor;
		},
		saldo_atual: function(){
			return saldo;
		},
		esta_vermelho: function(){
			return saldo < 0;
		}
	};
}

var conta = new ContaCorrente('Luiz', 'Cezer');
console.log(conta.nome_correntista());
conta.depositar(60);
console.log(conta.saldo_atual());
conta.sacar(30);
console.log(conta.saldo_atual());
console.log(conta.esta_vermelho());
