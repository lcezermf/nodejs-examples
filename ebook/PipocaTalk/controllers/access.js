module.exports = function(app){
  // var User = app.models.user;

  var AccessController = {

    login: function(req, res){
      var email = req.body.user.email;
      var name  = req.body.user.name;

      if(email && name){
        var user = req.body.user;
        req.session.user = user;
        res.redirect('/contacts');
      }else{
        res.redirect('/');
      }
    },

    logout: function(req, res){
      req.session.destroy();
      res.redirect('/');
    }
  };
  return AccessController;
}