fs = require('fs')

leituraSync = (arquivo) ->
  console.log 'Leitura Sync'
  inicio = new Date().getTime()
  fs.readFileSync arquivo
  fim = new Date().getTime();
  console.log "Bloquei síncrono #{fim - inicio} ms"

module.exports = leituraSync
