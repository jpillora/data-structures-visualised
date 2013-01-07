define([
  'util/dom/create',
  'jquery',
  'lib/jquery.cookie'
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

  ui.dropdown = create("select").css({width: '100%'});
  ui.container.append(create("div").append(ui.dropdown));

  ui.types = {};

  ui.numbers = create("input").val(10);
  ui.container.append(
    create("div")
      .append(create("div").html("Insertions"))
      .append(ui.numbers)
  );

  ui.digits = create("input").val(2);
  ui.container.append(
    create("div")
      .append(create("div").html("Digits"))
      .append(ui.digits)
  );

  ui.classContainers = {};
  ui.classContainer = create("div");
  ui.container.append(ui.classContainer);

  ui.run = create("button").html("Run").css({width: '100%'});
  ui.container.append(create("div").append(ui.run));

  ui.selected = function() {
    return ui.dropdown.find("option:selected");
  };

  ui.add = function(type, Class) {
    if(!ui.types[type]) {
      ui.types[type] = create("optgroup").attr('label', type);
      ui.dropdown.append(ui.types[type]);
    }

    var option = create("option")
      .data('class', Class)
      .html(Class.prototype.toString());

    ui.types[type].append(option);
  };

  ui.dropdown.change(function() {

    var Class = ui.selected().data('class');
    instance = new Class(canvas);
    console.log("setup class: " + instance);
    ui.selected().data('instance', instance);

    _.each(ui.classContainers, function(container, name) {
      container.slideUp();
    });

    if(ui.classContainers[instance]) {
      ui.classContainers[instance].slideDown();
    } else if(instance.buildUi) {
      var container = instance.buildUi();
      ui.classContainers[instance] = container;
      ui.classContainer.append(container);
    }

  });

  window.ui = ui;

  return ui;

});