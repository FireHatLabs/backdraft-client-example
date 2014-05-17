bdApp = Ember.Application.create({
  LOG_TRANSITIONS: true
});

bdApp.Router.map(function() {
  
  this.route('register');
  this.route('login');

  this.route('account');

});

bdApp.IndexRoute = Ember.Route.extend({
  model: function() {
    return ['red', 'yellow', 'blue'];
  }
});
