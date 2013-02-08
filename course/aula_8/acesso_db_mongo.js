var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/nodejs02');

/* criar a 'tabela' Aluno ... */
var AlunoSchema = new mongoose.Schema({
  nome: { type:String, index:  false, unique: true },
  idade: { type:Number, index: true }
});

//Associa a 'tabela' AlunoSchema a um Model
mongoose.model('Aluno', AlunoSchema);
var Aluno = mongoose.model('Aluno');

//Usa o model 
/*

var aluno = new Aluno();
aluno.name = 'Cezinha';
aluno.idade = 22;

aluno.save(function(erro){
  if (erro) throw erro;
  console.log("salvo com sucesso.");
});
*/
 
/*
var aluno_dois = new Aluno({ nome: 'Luiz', idade:22 })
aluno_dois.save();
*/

//var aluno_tres = new Aluno({ nome: 'Batata', idade: 29 })
//aluno_tres.save();

/////////////////

/* find 
Aluno.findOne({idade: 22}, function(err, aluno){
  if(err)
    console.log(err);

  console.log("aluno : " + aluno.nome + " idade : " + aluno.idade);
  console.log('consulta..');
});
console.log('lol');
*/

/* remove 
Aluno.remove({ idade: 29 }, function(err) {
  if(err) throw err;
  console.log('removido com sucesso..');
});
*/

Aluno.findOne({ idade:22 }, function(err, aluno){
  if(err) throw err;
   
  aluno.nome = 'Luiz Cezer';
  aluno.idade = 3212;
  aluno.save();
});



//mongoose.disconnect();
