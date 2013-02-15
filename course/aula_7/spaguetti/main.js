var DonaDeCasa = require('./dona_de_casa');

var dona_de_casa = new DonaDeCasa();

//escuta o evento e recebe o suco
dona_de_casa.on('suco pronto', function(suco) {
  console.log('suco de ' + suco + 'pronto e servido..');
});

dona_de_casa.fazer_suco('laranja')

/* 
  dispara o evento
qualquer_coisa.emit('nome_evento')

  escuta o evento

qualquer_coisa.on('nome_evento', function(arg) {
  faz algo
})

*/
