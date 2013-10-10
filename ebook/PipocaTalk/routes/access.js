module.exports = function(app){
  var access = app.controllers.access;

  app.post('/sign_in', access.login);
  app.get('/sign_out', access.logout);
}