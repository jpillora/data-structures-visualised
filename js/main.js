define([
  './ui',
  './run',
  './canvas',
  './sort/index',
  './data-structure/index',
  'jquery'
], function(
  ui,
  run,
  canvas,
  sorts,
  dataStructures
) {

  var setup = function(type, Class) {
    console.log("setup class: " + Class + " (" + type + ")");
    ui.add(type, Class);
  };

  sorts.forEach(function(S) {
    setup('sorts', S);
  });
  dataStructures.forEach(function(S) {
    setup('datastructures', S);
  });


  var onRun = function() {
    try {
      run(s);
    } catch(e) {
      console.log(s + " failed: " + e);
      return false;
    }

    if(s.draw) s.draw(canvas);

    console.log(s + " passed");
    return true;
  };
  
  $(function() {
    $("body").append(ui.container);
    ui.run.click(onRun);
  });

});