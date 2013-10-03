fs = require 'fs'

lerDiretorio = ->
  fs.readdir __dirname, (err, diretorio) ->
    throw err if err
    diretorio.forEach (arquivo) ->
      ler arquivo

  ler = (arquivo) ->
    path = "./#{arquivo}"
    fs.stat path, (err, stat) ->
      throw err if err
      console.log "#{arquivo} #{stat.size} bytes" if stat.isFile() 

lerDiretorio();