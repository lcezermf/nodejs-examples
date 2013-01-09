var util = require('util');

/*
Sincrona básica

function FuncaoSincrona(){
	throw {
		name: 'MeuErro',
		message : 'Minha Mensagem'
	}
}

try{
  FuncaoSincrona()
}catch(e){
  console.log(e.name);
  console.log(e.message);
}
*/

/*
Sincrona com Error -> recomendado

function FuncaoSincronaError(){
	throw new Error('Meu Erro');
}

try{
  FuncaoSincronaError();
}catch(e){
  console.log(util.inspect(e));
}
*/

