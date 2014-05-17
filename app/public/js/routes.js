BDApp.Router.map(function() {
  this.route('register');
  this.route('login');
  this.route('account');

  this.resource('items', function () {
    this.resource('item',  { path: '/:item_id' });
  });

});

// Accounts ////////////////////////////////

BDApp.AccountRoute = Ember.Route.extend({
  model: function() {
    return this.store.findAll('item');
  }
});

// Items ////////////////////////////////

BDApp.ItemsRoute = Ember.Route.extend({
  model: function() {
    return this.store.findAll('item');
    // Server Side: return this.store.find('item', { order: 'title' });
  }
});
