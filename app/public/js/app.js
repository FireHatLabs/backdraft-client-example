$(function() {

  
  Templates(function() {
    var BDApp = Ember.Application.create({
      LOG_TRANSITIONS: true
    });

    BDApp.ApplicationSerializer = DS.ActiveModelSerializer.extend({
      primaryKey: '_id'
    });
    
    Models(BDApp);
    Controllers(BDApp);
    Routes(BDApp);   
  });

});