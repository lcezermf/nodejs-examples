var redis = require('redis');
var client = redis.createClient();

client.on("error", function(err) {
  console.error("Error connecting to redis", err);
});

client.select(0);

/*
client.set('name', 'Cezinha', function(err, inf){
	console.log(err);
	console.log(inf);
});
*/

/* Seta um valor para uma chave -> chave => valor
client.set('name', 'Cezinha');
*/

/*
client.get('name', function(err, name) {
  console.log('Name : ' + name);
});

*/
/* busca 
client.get('name', function(err, name){
  console.log(name);
});
*/

/* retorna 1/0
client.exists('name', function(err, exist){
  console.log(exist);
});
*/

/* deletar
client.del('name');


client.del('name');
*/

client.incr('contador', function(err, retorno) {
  console.log('contador : ' + retorno);
});

client.quit();