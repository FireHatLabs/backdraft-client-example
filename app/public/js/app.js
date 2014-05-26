var BDApp = Ember.Application.create({
  LOG_TRANSITIONS: true
});

BDApp.ApplicationSerializer = DS.ActiveModelSerializer.extend({
  primaryKey: '_id'
});

function loadTemplate(name) {
  return $.get('hb/'+name+'.hb').then(function(src) {
    $("body").prepend(src);
  });
}

loadTemplate('nav');
loadTemplate('index');
loadTemplate('login');
loadTemplate('registration');
loadTemplate('account');
loadTemplate('item');