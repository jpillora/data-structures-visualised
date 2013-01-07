define(['util/dom/create','lib/class'], function(create) {

  return Class.extend({

    name: "Base",

    init: function(canvas) {
      this.canvas = canvas;
    },

    create: create,

    toString: function() {
      return this.name;
    },

    random: function(digits) {
      return Math.round(Math.random()*Math.pow(10, digits));
    },

    insertRandom: function(n, digits) {
      if(!this.insert) throw unimplemented("insert");
      for(var i = 0; i < n; ++i) this.insert(this.random(digits));
    },

    isSorted: function() {
      if(!this.toArray) throw unimplemented("toArray");
      var a = this.toArray(),
          last = a[0],
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
    },

    unimplemented: function(method) {
      throw "MUST IMPLEMENT '"+method+"' METHOD";
    },

    buildUi: function() {

      var ui = {};
      ui.container = this.create("div");

      ui.debug = this.create("input").attr("type", "checkbox");
      
      ui.container.append(
        this.create("span").html("Debug"),
        ui.debug
      );

      ui.isDebug = function() {
        return ui.debug.is(":checked");
      };

      this.ui = ui;
      return ui.container;
    }


  });


});