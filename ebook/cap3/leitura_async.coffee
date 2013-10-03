fs = require('fs')

leituraAsync = (arquivo) ->
  console.log 'leitura async'
  inicio = new Date().getTime()
  fs.readFile arquivo
  fim = new Date().getTime()
  console.log "Bloqueio assincrono #{fim - inicio} ms"

module.exports = leituraAsync