fs = require('fs')

fs.readdir __dirname, (err, contents) ->
  throw err if err
  contents.forEach (content) ->
    path = "./#{content}"
    fs.stat path, (err, stat) ->
      throw err if err
      console.log "#{content} #{stat.size} bytes" if stat.isFile()