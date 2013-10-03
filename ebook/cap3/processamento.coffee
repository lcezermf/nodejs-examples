http = require('http')
fs = require('fs')
leituraAsync = require('./leitura_async')
leituraSync = require('./leitura_sync')
arquivo = './node.zip'
stream = fs.createWriteStream(arquivo)
download = "http://nodejs.org/dist/v0.10.12/node-v0.10.12.tar.gz"

http.get download, (response) ->
  console.log 'Download do nodejs'
  response.on 'data', (data) ->
    stream.write data

  response.on 'end', ->
    stream.end()
    console.log 'Download DONE'
    leituraAsync arquivo
    leituraSync arquivo  