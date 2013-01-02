define([], function() {

  //main class
  var Quick = function(canvas) {
    this.reset();
    this.canvas = canvas;
  };


  Quick.toString = Quick.prototype.toString = function() {
    return "Quick";
  };

  Quick.prototype.reset = function() {
    this.a = [];
  };

  Quick.prototype.insert = function(n) {
    this.a.push(n);
  };

  Quick.prototype.toArray = function() {
    this.a = Quick.sort(this.a);
    return this.a;
  };

  Quick.sort = function(array) {


    console.log(array);

    var sorted = [];
    array.forEach(function(n) {
      sorted.push([n]);
    });

    while(sorted.length > 1) {
      var a = sorted.shift(),
          b = sorted.shift();
      sorted.push(Quick.combine(a,b));
    }

    console.log(sorted[0]);
    
    return sorted[0];
  };

  Quick.combine = function(a,b) {
    var c = [];
    while(a.length && b.length)
      c.push(a[0] < b[0] ? a.shift() : b.shift());
    while(a.length)
      c.push(a.shift());
    while(b.length)
      c.push(b.shift());
    return c;
  };


  return Quick;


});