//BDApp.ApplicationAdapter = DS.RESTAdapter.extend();
BDApp.ApplicationAdapter = DS.FixtureAdapter.extend();

BDApp.Item = DS.Model.extend({
  title:        DS.attr('string'),
  description:  DS.attr('string'),
  comments:     DS.hasMany('comment', { async: true })
});

BDApp.Comment = DS.Model.extend({
  content:      DS.attr('string'),
  addedAt:      DS.attr('date'),
  item:         DS.belongsTo('item')
});

BDApp.Registration = DS.Model.extend({
  firstName:    DS.attr('string'),
  lastName:     DS.attr('string'),
  email:        DS.attr('string'),
  password:     DS.attr('string')
});

