define([], function() {

  //node class
  var Node = function(parent, val) {
    this.red = false;
    this.val = val;
    this.left = null;
    this.right = null;
    this.parent = parent;
  };

  //main class
  var RedBlack = function() {
    this.root = new Node(null, null);
  };


  RedBlack.toString = function() {
    return "RedBlack";
  };

  RedBlack.prototype.toString = function() {
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
      node.left = new Node(node, n);
    else if(n < node.val && node.left)
      this.__insert(node.left, n);
    else if(n >= node.val && !node.right)
      node.right = new Node(node, n);
    else if(n >= node.val && node.right)
      this.__insert(node.right, n);
    else
      throw "INVALID STATE";
  };


  RedBlack.prototype.__breadth = function(node, a) {
    if(!node) return;
    a.push(node.val);
    this.__breadth(node.left,  a);
    this.__breadth(node.right, a);
  };

  RedBlack.prototype.toArray = function() {
    var a = [];
    this.__breadth(this.root, a);
    return a;
  };

  RedBlack.prototype.draw = function(paper) {


  };


  return RedBlack;


});