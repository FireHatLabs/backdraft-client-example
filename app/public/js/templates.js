var Templates = function Templates (cb) {
  console.log("Templates Loaded");
  function loadTemplate(name) {
    return $.get('hb/' + name + '.hb').then(function (src) {
      $("body").prepend(src);
    });
  }

  loadTemplate('nav');
  loadTemplate('index');
  loadTemplate('login');
  loadTemplate('registration');
  loadTemplate('account');
  loadTemplate('item');
  cb();
};