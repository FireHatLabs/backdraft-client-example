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
