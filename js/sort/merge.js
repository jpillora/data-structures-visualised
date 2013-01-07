define(['./base'], function(BaseSort) {

  //main class
  return BaseSort.extend({

    name: "Merge",

    sort: function() {
      var sorted = [];
      this.a.forEach(function(n) {
        sorted.push([n]);
      });

      while(sorted.length > 1) {
        var a = sorted.shift(),
            b = sorted.shift();
        sorted.push(this.combine(a,b));
      }
      
      this.a = sorted[0];
    },

    combine: function(a,b) {
      var c = [];
      while(a.length && b.length)
        c.push(a[0] < b[0] ? a.shift() : b.shift());
      while(a.length)
        c.push(a.shift());
      while(b.length)
        c.push(b.shift());
      return c;
    }

  });

});