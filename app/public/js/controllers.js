BDApp.ItemsController = Ember.ArrayController.extend({
  sortProperties: ['title'],
  sortAscending: true,
  itemsCount: Ember.computed.alias('length')
});

BDApp.AccountController = Ember.ArrayController.extend({
  firstName: 'Bobby',
  lastName: 'Tables',
  itemsCount: Ember.computed.alias('length')
});

BDApp.LoginController = Ember.ArrayController.extend({
  username: 'Bobby',
  password: 'Tables',
  isAuthenticated: false,
  actions: {
    login: function() {
      console.log('login called');
    },
    logout: function() {
      console.log('logout called');
    }
  }
});

BDApp.RegistrationController = Ember.ArrayController.extend({
  template: 'register',
  username: 'Bobby',
  password: 'Tables',
  actions: {
    register: function() {
      console.log('register called');
    }
  }
});
