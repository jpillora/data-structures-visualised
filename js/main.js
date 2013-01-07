define([
  './ui',
  './canvas',
  './classes',
  'ext/jquery',
  'underscore'
], function(
  ui,
  canvas,
  classes
) {

  var onRun = function() {

    try {

      var instance = ui.selected().data('instance');
      if(!instance) throw "CONSTRUCTOR FAILED";
      console.log(instance + " running...");
      var n = parseInt(ui.numbers.val(), 10),
        range = parseInt(ui.digits.val(), 10);

      instance.run(n, range);
      console.log(instance + " passed");

    } catch(e) {
      ui.run.wiggle();
      console.error(instance + " failed: " + e + "\n\n" + (e.stack || ''));
      throw e;
    }

    return true;
  };

  var onKey = function(e) {
    if(e.shiftKey && e.keyCode === 13) onRun();
  };

  _.each(classes, function(cs, type) {
    _.each(cs, function(c) {
      ui.add(type, c);
    });
  });

  $(function() {
    $("body").append(ui.container);
    ui.run.click(onRun);
    ui.dropdown.trigger('change');

    $(document).keyup(onKey);

    onRun();
  });

});