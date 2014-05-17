bdApp = Ember.Application.create();

bdApp.Router.map(function() {
  // put your routes here
});

bdApp.IndexRoute = Ember.Route.extend({
  model: function() {
    return ['red', 'yellow', 'blue'];
  }
});
