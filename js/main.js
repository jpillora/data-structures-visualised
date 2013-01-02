define([
  './ui',
  './canvas',
  './sort/index',
  './data-structure/index',
  'jquery'
], function(
  ui,
  canvas,
  sorts,
  dataStructures
) {

  var instances = [];

  var setup = function(type, Class) {
    console.log("setup class: " + Class + " (" + type + ")");
    var instance = new Class();
    instances.push(instance);
    ui.add(type, instance);
  };

  var random = function(digits) {
    var factor = Math.pow(10, digits);
    return Math.round(Math.random()*factor);
  };

  var isSorted = function(a) {

    var last = a[0],
        curr = null,
        ASC = 1,
        DESC = -1,
        dir = 0;

    for(var i = 1; i < a.length; ++i) {
      curr = a[i];
      if(dir === 0)
        dir = curr < last ? DESC : ASC;
      else if(dir === DESC && curr > last)
        throw "SHOULD BE DECENDING AT: " + i;
      else if(dir === ASC && curr < last)
        throw "SHOULD BE ASCENDING AT: " + i;
    }

    return true;
  };

  var run = function(instance) {

    window[instance] = instance;

    if(!instance.reset)
      throw "STRUCTURE MISSING 'RESET'";

    instance.reset();

    if(!instance.insert)
      throw "STRUCTURE MISSING 'INSERT'";

    for(var i = 0; i < parseInt(ui.numbers.val(), 10); ++i)
      instance.insert(random(parseInt(ui.digits.val(), 10)));

    if(!instance.toArray)
      throw "STRUCTURE MISSING 'TO ARRAY'";

    var a = instance.toArray();

    isSorted(a);

    if(instance.draw)
      instance.draw(canvas);
  };

  var currentOption = function() {
    return ui.dropdown.find("option:selected");
  };

  var onRun = function() {

    var instance = currentOption().data('instance');

    try {
      run(instance);
    } catch(e) {
      console.error(instance + " failed: " + e + "\n" + (e.stack || ''));
      return false;
    }

    console.log(instance + " passed");
    return true;
  };

  sorts.forEach(function(S) {
    setup('sorts', S);
  });
  dataStructures.forEach(function(S) {
    setup('datastructures', S);
  });

  $(function() {
    $("body").append(ui.container);
    ui.run.click(onRun);
    onRun();
  });

});