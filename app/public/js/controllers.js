var Controllers = function Controllers (BDApp) {
  console.log("Controllers Loaded");
  BDApp.ApplicationController = Ember.Controller.extend({
    isAuthenticated: false
  });

  BDApp.ItemsController = Ember.ArrayController.extend({
    sortProperties: ['title'],
    sortAscending: true,
    itemsCount: Ember.computed.alias('length'),
    addForm: function () {
      return this.store.createRecord('item', {
        item: this.get('model')
      });
    }.property('model'),
    actions: {
      add: function () {
        console.log('add called');
        var controller = this;
        this.get('addForm').set('description', '');
        this.get('addForm').save().then(function (item) {
          controller.get('model.items').addObject(item);
        });
      }
    }
  });

  BDApp.AccountController = Ember.ArrayController.extend({
    isAuthenticated: function() {
      return BDApp.ApplicationController.get('isAuthenticated');
    },
    itemsCount: Ember.computed.alias('length')
  });

  BDApp.LoginController = Ember.ArrayController.extend({
    actions: {
      login: function () {
        console.log('login called');
        var login = this.store.createRecord('auth', {
          email: this.get('email'),
          password: this.get('password')
        });

        var controller = this;

        login.save().then(function (auth) {
          console.log('Log in!');
          BDApp.ApplicationController.isAuthenticated = true;
          controller.transitionToRoute('account');
        });        
      },
      logout: function () {
        console.log('logout called');
      },
      check: function () {
        console.log('check login');
      }
    }
  });

  BDApp.RegisterController = Ember.ArrayController.extend({
    actions: {
      register: function () {
        console.log('register called');

        var registration = this.store.createRecord('registration', {
          firstName: this.get('firstName'),
          lastName: this.get('lastName'),
          email: this.get('email'),
          password: this.get('password')
        });

        var controller = this;

        registration.save().then(function (registration) {
          console.log('Time to log in');
          controller.transitionToRoute('account');
        });
      }
    }
  });
};