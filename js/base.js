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

    randomArray: function(n, digits) {
      var a = [];
      for(var i = 0; i < n; ++i)
        a[i] = this.random(digits);
      return a;
    },

    insertArray: function(a) {
      if(!this.insert) throw unimplemented("insert");
      for(var i = 0; i < a.length; ++i) this.insert(a[i]);
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

    isSortedEqual: function(original) {
      original.sort(function(a,b) {
        return a >= b;
      });

      var a = this.toArray();
      if(a.length !== original.length)
        throw "DIFFERING LENGTHS: " + a.length + " - " + original.length;

      for(var i = 0; i < a.length; ++i)
        if(a[i] !== original[i])
          throw "DIFFERING AT INDEX: " + i + "\n" + original.toString();
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