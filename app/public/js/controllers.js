BDApp.ItemsController = Ember.ArrayController.extend({
  /*sortProperties: ['title'],*/
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
    login: function () {
      console.log('login called');
    },
    logout: function () {
      console.log('logout called');
    }
  }
});

BDApp.RegisterController = Ember.ArrayController.extend({
  actions: {
    register: function() {
      console.log('register called');

      var registration = this.store.createRecord('registration', {
        firstName: this.get('firstName'),
        lastName: this.get('lastName'),
        email: this.get('email'),
        password: this.get('password')
      });

      var controller = this;

      registration.save().then(function(registration) {
        console.log('Time to log in');
        controller.transitionToRoute('account');
      });
    }
  }
});
