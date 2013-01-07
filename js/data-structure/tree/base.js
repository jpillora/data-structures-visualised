define(['../../base','../node/base'], function(Base, Node) {
  //main class
  return Base.extend({

    name: "BaseTree",
    PREORDER_WITH_LEAVES: -2,
    PREORDER: -1,
    INORDER: 0,
    POSTORDER: 1,

    init:  function(canvas, n, CustomNode) {
      this._super(canvas);
      this.Node = CustomNode || Node;
      if(typeof n !== 'number')
        throw "MUST SPECIFY TREE SIZE";
      this.n = n-1;
    },

    reset: function() {
      this.root = null;
    },

    insert: function(val) {
      if(!this.insertValue) this.unimplemented("insertValue");
      if(!this.root) 
        return this.root = new this.Node(val);
      return this.insertValue(this.root, val);
    },

    insertValue: function(node, val) {
      for(var i = 0; i < this.n; ++i)
        if(node.val(i) === undefined)
          return node.val(i,val);
        else if(val < node.val(i))
          return this.insertValueAt(node, i, val);

      return this.insertValueAt(node, this.n, val);
    },

    insertValueAt: function(node, c, val) {
      node.size++;
      if(node.child(c))
        return this.insertValue(node.child(c), val);
      return node.child(c, new this.Node(val, node));
    },

    bfs: function(fn, includeLeaves) {
      this.traverse(
        includeLeaves ?
          this.PREORDER_WITH_LEAVES :
          this.PREORDER,
        fn);
    },
    dfs: function(fn) {
      this.traverse(this.INORDER, fn);
    },

    traverse: function(order, fn) {
      this.traverseAcc(this.root, 0, order, fn);
    },

    traverseAcc: function(node, depth, order, fn) {
      
      if(order === this.PREORDER_WITH_LEAVES)
        fn(node, depth);

      if(!node) return;
      
      if(order === this.PREORDER)
        fn(node, depth);

      for(var i = 0; i <= this.n; ++i) {
        this.traverseAcc(node.child(i), depth+1, order, fn);
        if(order === this.INORDER && node.val(i) !== undefined)
          fn(node.val(i), depth);
      }

      if(order === this.POSTORDER)
        fn(node, depth);
    },

    maxMinDepth: function() {
      var data = {max: -Infinity, min: Infinity};
      this.bfs(function(node, depth) {
        if(node) return;
        if(data.min > depth) data.min = depth;
        if(data.max < depth) data.max = depth;
      }, true);
      return data;
    },

    toArray: function() {
      var a = [];
      this.dfs(function(val) {
        a.push(val);
      });
      return a;
    },

    run: function(n, range) {
      this.reset();

      var a = this.randomArray(n, range);

      console.log(a);
      this.insertArray(a);
      if(this.ui.isDebug()) console.log(this.root);

      console.log(this.maxMinDepth());
      if(this.ui.isDebug()) this.print();
      console.log(this.toArray());
      this.isSortedEqual(a);
    },

    print: function() {
      this.bfs(function(node,depth) {
        var s = "";
        while(depth--) s += ":";
        console.log(s+node.values + " #" + node.size);
      });
    },

    draw: function(paper) {

    }

  });

});