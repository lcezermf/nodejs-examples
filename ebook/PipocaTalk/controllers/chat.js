module.exports = function(app){
  var ChatController = {
    index: function(req, res){
      res.redirect('/');
    }
  };
  return ChatController;
}