http = require('http');
url  = require('url');
fs   = require('fs');

return_path_name = (request) ->
  url.parse(request.url).pathname

diretorio = (arquivo) ->
  "#{__dirname}/#{arquivo}"

roteador = (path_name) ->
  arquivo = switch path_name
    when '/', '/artigos' then diretorio('artigos.html')
    when '/contato' then diretorio('contato.html')
    else diretorio('erro.html')

  return arquivo if fs.existsSync(arquivo)
  diretorio('erro.html')

server = http.createServer (request, response) ->
  path_name = return_path_name(request)
  arquivo   = roteador(path_name)

  fs.readFile arquivo, (err, html) ->
    response.writeHead 200, 'Content-Type: html/text'
    response.end html

server.listen 3003, ->
  console.log 'UP'