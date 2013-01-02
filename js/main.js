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

  var instances = [];

  var setup = function(type, Class) {


    console.log("setup class: " + Class + " (" + type + ")");
    
    var instance = new Class();

    instances.push(instance);
    ui.add(type, instance);
  };



  var currentOption = function() {
    return ui.dropdown.find("option:selected");
  };

  var onRun = function() {

    var instance = currentOption().data('instance');

    try {
      run(instance);
    } catch(e) {
      console.log(instance + " failed: " + e);
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