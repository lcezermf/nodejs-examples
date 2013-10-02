http = require('http');
url  = require('url');
fs   = require('fs');

server = http.createServer (request, response) ->
  response.writeHead 200, 'Content-Type: text/html'
  response.end 'Hello' 

server.listen 3000, ->
  console.log 'hahaha'