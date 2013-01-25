var fs = require('fs');

/* Lendo diretorio 

fs.readdir('.', function(error, arquivos) {
  console.log(arquivos);
});
*/

/* Lendo diretorio recursivo

function listar_diretorio(path){
	fs.readdir(path, function(error, arquivos) {
    listar_arquivos(path, arquivos);
	});
}

function listar_arquivos(path, arquivos){
	if(!arquivos) return;

	arquivos.forEach(function(arquivo) {
		var path_file = path + '/' + arquivo;
		console.log(path_file);
		fs.stat(path_file, function(error, stats){
      if(stats.isDirectory()){
      	listar_diretorio(path_file);
      }
		});
	});

}

listar_diretorio('../')
*/