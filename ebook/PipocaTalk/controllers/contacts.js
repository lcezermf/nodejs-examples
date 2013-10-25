module.exports = function(app){
  var ContactsController = {

    index: function(req, res){
      var user = req.session.user;
      
      if(user.contacts == undefined){
        user.contacts = [];
        contacts = user.contacts;
      }else{
        contacts = user.contacts;
      }

      var params = { user: user, contacts: contacts };
      res.render('contacts/index', params);
    },

    novo: function(req, res){
      res.render('contacts/novo');
    },

    create: function(req, res){
      var contact = req.body.contact;
      var user = req.session.user;
      user.contacts.push(contact);
      res.redirect('/contacts');
    },

    show: function(req, res){
      var id = req.params.id;
      var contact = req.session.user.contacts[id];
      var params = { contact: contact, id: id }
      res.render('contacts/show', params);
    },

    edit: function(req, res){
      var id = req.params.id;
      var user = req.session.user;
      var contact = user.contacts[id];
      var params = { id: id, user: user, contact: contact };
      res.render('contacts/edit', params);
    },

    update: function(req, res){
      var contact = req.body.contact;
      var user = req.session.user;
      user.contacts[req.params.id] = contact;
      res.redirect('/contacts');
    },

    destroy: function(req, res){
      var user = req.session.user;
      var id = req.params.id;
      user.contacts.splice(id, 1);
      res.redirect('/contacts');
    }

  };
  return ContactsController;
}