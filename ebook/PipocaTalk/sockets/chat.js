module.exports = function(io){
  var crypto = require('crypto')
    , md5 = crypto.createHash('md5')
    , sockets = io.sockets;

  sockets.on('connection', function(client){
    var session = client.handshake.session
      , user = session.user;
    client.set('email', user.email);
    
    var onlines = sockets.clients();
    onlines.forEach(function(online){
      var online = sockets.sockets[online.id];
      online.get('email', function(err, email){
        client.emit('notify-onlines', email);
        client.broadcast.emit('notify-onlines', email);
      });
    });

    client.on('join', function(sala){
      if(sala){
        sala = sala.replace('?','');
      }else{
        var timestamp = new Date().toString();
        var md5 = crypto.createHash('md5');
        sala = md5.update(timestamp).digest('hex')
      }
      client.set('sala', sala);
      client.join(sala);
    });

    client.on('send-server', function(msg){
      msg = "<b> "+ user.name + ":</b>" + msg + "<br />";
      client.get('sala', function(err, sala){
        var data = { email: user.email, sala: sala };
        client.broadcast.emit('new-message', data);
        sockets.in(sala).emit('send-client', msg);
      });
      client.emit('send-client', msg);
      client.broadcast.emit('send-client', msg);
    });

    client.on('disconnect', function(){
      client.get('sala', function(err, sala){
        var msg = "<b>" + user.name + ":</b> saiu da sala. <br />";
        client.broadcast.emit('notify-offlines', user.email);
        sockets.in(sala).emit('send-client', msg);
        client.leave(sala);
      })
    });

  });
}