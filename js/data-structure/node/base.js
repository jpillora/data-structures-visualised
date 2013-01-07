define(['../../base'], function(Base) {
  //main class
  return Base.extend({

    name: "BaseNode",

    init: function(val, parent) {
      this._super();
      this.size = 1;
      this.parent = parent;
      this.values = val !== undefined ? [val] : [];
      this.children = [];

    },

    val: function(i, val) {
      return val === undefined ? this.values[i] : (this.values[i] = val);
    },

    child: function(i, node) {
      return node === undefined ? this.children[i] : (this.children[i] = node);
    }

  });

});