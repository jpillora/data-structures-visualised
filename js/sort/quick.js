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

    console.log(this.a);
    Quick.sort(0, this.a.length - 1, this.a);
    console.log(this.a);
    return this.a;
  };

  Quick.swap = function(i, j, array) {

    console.log("swap: " + (array[i] === null ? "left" : "right") + ": " + (array[i] || array[j]) );

    Quick.swap.tmp = array[i];
    array[i] = array[j];
    array[j] = Quick.swap.tmp;

    console.log(array);

  };
  Quick.swap.tmp = null;

  Quick.partition = function(left, right, array, pivot) {

    console.log("quick: partition: %s [%s,%s]", array[pivot], left, right);

    Quick.swap(pivot, right, array);
    for(var i = left, s = left; i < right; ++i)
      if(array[i] < array[right])
        Quick.swap(i, s++, array);

    Quick.swap(s, right, array);
    return s;
  };

  Quick.sort = function(left, right, array) {

    if(left >= right) return;

    var pivot = Math.floor((right-left)/2) + left;

    pivot = Quick.partition(left, right, array, pivot);

    Quick.sort(left,  pivot-1, array);
    Quick.sort(pivot+1, right, array);
  };

  return Quick;


});