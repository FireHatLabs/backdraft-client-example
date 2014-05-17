bdApp = Ember.Application.create({
  LOG_TRANSITIONS: true
});

bdApp.Router.map(function() {
  this.route('register');
  this.route('login');
  this.route('account');
    
  this.resource('items', function () {
    this.resource('item',  { path: '/:title' });
  });
  
});

bdApp.IndexRoute = Ember.Route.extend({
  model: function() {
    return ['red', 'yellow', 'blue'];
  }
});

bdApp.AccountController = Ember.Controller.extend({
  firstName: 'Bobby',
  lastName: 'Tables'
});


// Items ////////////////////////////////

bdApp.ItemsRoute = Ember.Route.extend({
  model: function() {
    return bdApp.ITEMS;
  }  
});

bdApp.ItemRoute = Ember.Route.extend({
  model: function(params) {
    return bdApp.ITEMS.findBy('title', params.title);
  }
});

bdApp.ITEMS = [
  {
    title: "One",
    description: "Test Item"
  },
  {
    title: "Two",
    description: "Another Test Item"
  }    
];