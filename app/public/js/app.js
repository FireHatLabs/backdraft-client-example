var BDApp = Ember.Application.create({
  LOG_TRANSITIONS: true
});

BDApp.ApplicationSerializer = DS.ActiveModelSerializer.extend({
  primaryKey: '_id'
});