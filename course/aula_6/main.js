/*
var Aluno = require('./modulo1.js');
var aluno_um = new Aluno('Cezinha');
aluno_um.imprime_nome();
*/

var modulo_misto = require('./modulo2.js');
var aluno_dois = new modulo_misto.Aluno('lol');
aluno_dois.imprime_nome();
modulo_misto.funcao('batata8');