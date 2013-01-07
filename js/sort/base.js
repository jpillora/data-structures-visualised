define(['../base'], function(Base) {
  //main class
  return Base.extend({

    name: "BaseSort",

    init: function(canvas) {
      this.reset();
      this.canvas = canvas;
    },

    reset: function() {
      this.a = [];
    },

    insert: function(n) {
      this.a.push(n);
    },

    toArray: function() {
      return this.a;
    },

    run: function(n, range) {

      if(!this.sort) throw unimplemented("sort");

      this.reset();
      this.insertRandom(n, range);
      if(n < 50) console.log(this.toArray());
      console.time(this + " Sort");
      this.sort();
      console.timeEnd(this + " Sort");
      if(n < 50) console.log(this.toArray());
      this.isSorted();
    },

    //helpers
    swap: function(i, j) {
      var tmp = this.a[i];
      this.a[i] = this.a[j];
      this.a[j] = tmp;
    }

  });

});