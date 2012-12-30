define([], function() {

  //node class
  var Node = function(val, red) {
    this.red = false;
    this.val = val;
    this.left = null;
    this.right = null;
    this.parent = null;
  };

  //main class
  var RedBlack = function() {
    this.root = new Node(null);
  };
  RedBlack.toString = function() {
    return "RedBlack"; 
  };

  RedBlack.prototype.insert = function(n) {
    this.__insert(this.root, n);
  };

  //recursive helper
  RedBlack.prototype.__insert = function(node, n) {

    if(node.val === null)
      node.val = n;
    else if(n < node.val && !node.left)
      node.left = new Node(n);
    else if(n < node.val && node.left)
      this.__insert(node.left, n);
    else if(n >= node.val && !node.right)
      node.right = new Node(n);
    else if(n >= node.val && node.right)
      this.__insert(node.right, n);
    else
      throw "INVALID STATE";
  };


  RedBlack.prototype.__breadth = function(node, a) {

    node.left

  }

  RedBlack.prototype.toArray = function() {
    return this.__breadth(this.root, []);
  };


  return RedBlack;


});