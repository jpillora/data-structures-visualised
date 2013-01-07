define(['./base'], function(BaseNode) {

  return BaseNode.extend({
    name: "AVLNode",

    init: function(val, parent) {
      this._super(val, parent);
    },

    val: function(val) {
      return this._super(0, val);
    },

    left: function(node) {
      return this.child(0, node);
    },

    right: function(node) {
      return this.child(1, node);
    }

  });

});
