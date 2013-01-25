var fs = require('fs')

//status
/*
function mostrar_status(dir, file_name){
	fs.lstat(dir + '/' + file_name, function(error, stats) {
    //console.log(stats);
    console.log('É um diretório : ' + stats.isDirectory());
    console.log('É uma arquivo : ' + stats.isFile());
    console.log('É um link simbólico : ' + stats.isSymbolicLink());
	});
}

mostrar_status(__dirname, 'other');

//exibe informações do arquivo em 'real-time'

fs.watchFile('./message.txt', function(current, previous) {
  console.log(current);
  console.log(previous);
});

*/

function deletar_arquivo(file){
	fs.unlink(file, function(error){
    if(error) throw error;
    console.log(file + " apagado.");
	});	
}

deletar_arquivo('arquivo.txt');