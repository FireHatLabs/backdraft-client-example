BDApp = Ember.Application.create({
  LOG_TRANSITIONS: true
});

//BDApp.ApplicationAdapter = DS.RESTAdapter.extend();
BDApp.ApplicationAdapter = DS.FixtureAdapter.extend();

BDApp.Router.map(function() {
  this.route('register');
  this.route('login');
  this.route('account');
    
  this.resource('items', function () {
    this.resource('item',  { path: '/:item_id' });
  });
  
});

BDApp.IndexRoute = Ember.Route.extend({
  model: function() {
    return ['red', 'yellow', 'blue'];
  }
});

BDApp.AccountController = Ember.Controller.extend({
  firstName: 'Bobby',
  lastName: 'Tables'
});


// Items ////////////////////////////////

BDApp.ItemsRoute = Ember.Route.extend({
  model: function() {
    return this.store.findAll('item');
  }  
});

BDApp.Item = DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),
  comments: DS.hasMany('comment', { async: true })
});

BDApp.Comment = DS.Model.extend({
  content: DS.attr('string'),
  addedAt: DS.attr('date'),
  item: DS.belongsTo('item')
});

BDApp.Item.FIXTURES = [
  {
    id: 1,
    title: "One",
    description: "Test Item",
    comments: [11,12]
  },
  {
    id: 2,
    title: "Two",
    description: "Another Test Item"
  }    
];

BDApp.Comment.FIXTURES = [
  {
    id: 11,
    item: 1,
    content: "Another Test Comment"
  },
  {
    id: 12,
    item: 1,
    content: "Test Comment"
  }
];