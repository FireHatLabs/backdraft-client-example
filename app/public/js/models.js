var Models = function Models (BDApp) {
  console.log("Models Loaded");
//BDApp.ApplicationAdapter = DS.FixtureAdapter.extend();
  BDApp.ApplicationAdapter = DS.RESTAdapter.extend({
    host: 'http://127.0.0.1:3000'
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

  BDApp.Registration = DS.Model.extend({
    firstName: DS.attr('string'),
    lastName: DS.attr('string'),
    email: DS.attr('string'),
    password: DS.attr('string')
  });

  BDApp.Account = DS.Model.extend({
    firstName: DS.attr('string'),
    lastName: DS.attr('string'),
    email: DS.attr('string')
  });

  BDApp.Auth = DS.Model.extend({
    authenticated: DS.attr('boolean'),
    email: DS.attr('string'),
    password: DS.attr('string')
  });

};