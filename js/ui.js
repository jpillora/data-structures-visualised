define([
  'util/dom/create',
  'jquery'
], function(
  create
) {

  var ui = {};

  ui.container = create("div").css({
    position: "absolute",
    top: 0, left: 0,
    margin: 20, padding: 20
  });

  ui.dropdown = create("select");
  ui.container.append(create("div").append(ui.dropdown));

  ui.sorts = create("optgroup").attr('label', 'Sort Algorithms');
  ui.dropdown.append(ui.sorts);

  ui.structures = create("optgroup").attr('label', 'Data Structures');
  ui.dropdown.append(ui.structures);

  ui.run = create("button").html("Run");
  ui.container.append(create("div").append(ui.run));




  ui.add = function(type, Class) {
    var option = create("option").data('Class', Class).html(Class.toString());
    if(ui[type]) ui[type].append(option);
  };

  return ui;

});