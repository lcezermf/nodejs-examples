module.exports = function(app){
  var contacts = app.controllers.contacts;
  var auth     = require('../middleware/authenticator');

  app.get('/contacts/novo', auth, contacts.novo);
  app.post('/contacts', auth, contacts.create);
  app.get('/contacts', auth, contacts.index);
  app.get('/contacts/:id', auth, contacts.show);
  app.get('/contacts/:id/edit', auth, contacts.edit);
  app.put('/contacts/:id', auth, contacts.update);
  app.del('/contacts/:id', auth, contacts.destroy);
}