define([], function() {

  //main class
  var Merge = function(canvas) {
    this.reset();
    this.canvas = canvas;
  };


  Merge.toString = Merge.prototype.toString = function() {
    return "Merge";
  };

  Merge.prototype.reset = function() {
    this.a = [];
  };

  Merge.prototype.insert = function(n) {
    this.a.push(n);
  };

  Merge.prototype.toArray = function() {
    this.a = Merge.sort(this.a);
    return this.a;
  };

  Merge.sort = function(array) {


    console.log(array);

    var sorted = [];
    array.forEach(function(n) {
      sorted.push([n]);
    });

    while(sorted.length > 1) {
      var a = sorted.shift(),
          b = sorted.shift();
      sorted.push(Merge.combine(a,b));
    }

    console.log(sorted[0]);
    
    return sorted[0];
  };

  Merge.combine = function(a,b) {
    var c = [];
    while(a.length && b.length)
      c.push(a[0] < b[0] ? a.shift() : b.shift());
    while(a.length)
      c.push(a.shift());
    while(b.length)
      c.push(b.shift());
    return c;
  };


  return Merge;


});