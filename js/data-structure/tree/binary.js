define(['./base'], function(BaseTree) {

  return BaseTree.extend({
    name: "BinaryTree",

    init: function(canvas) {
      this._super(canvas, 2, null);
    }
  });

});
