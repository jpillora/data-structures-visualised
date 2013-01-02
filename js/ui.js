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
    margin: 20,
    padding: 10,
    background: 'whiteSmoke',
    'border-radius': 10
  });

  ui.dropdown = create("select");
  ui.container.append(create("div").append(ui.dropdown));

  ui.sorts = create("optgroup").attr('label', 'Sort Algorithms');
  ui.dropdown.append(ui.sorts);

  ui.datastructures = create("optgroup").attr('label', 'Data Structures');
  ui.dropdown.append(ui.datastructures);

  ui.numbers = create("input").val(10);
  ui.container.append(create("div").append(ui.numbers));

  ui.digits = create("input").val(2);
  ui.container.append(create("div").append(ui.digits));

  ui.run = create("button").html("Run").css({width: '100%'});
  ui.container.append(create("div").append(ui.run));

  ui.add = function(type, instance) {
    var option = create("option")
      .data('instance', instance)
      .html(instance.toString());
    if(ui[type]) ui[type].append(option);
  };

  return ui;

});