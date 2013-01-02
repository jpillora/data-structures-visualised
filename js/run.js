define([], function() {

  var random = function(digits) {
    var factor = Math.pow(10, digits);
    return Math.round(Math.random()*factor);
  };

  var isSorted = function(a) {

    var last = a[0],
        curr = null,
        ASC = 1,
        DESC = -1,
        dir = 0;

    for(var i = 1; i < a.length; ++i) {
      curr = a[i];
      if(dir === 0)
        dir = curr < last ? DESC : ASC;
      else if(dir === DESC && curr > last)
        throw "SHOULD BE DECENDING AT: " + i;
      else if(dir === ASC && curr < last)
        throw "SHOULD BE ASCENDING AT: " + i;
    }

    return true;
  };

  var run = function(instance) {

    window[instance] = instance;

    if(!instance.reset)
      throw "STRUCTURE MISSING 'RESET'";

    instance.reset();

    if(!instance.insert)
      throw "STRUCTURE MISSING 'INSERT'";

    for(var i = 0; i < 10; ++i)
      instance.insert(random(2));

    if(!instance.toArray)
      throw "STRUCTURE MISSING 'TO ARRAY'";

    var a = instance.toArray();

    isSorted(a);

    if(instance.draw)
      instance.draw(canvas);
  };

  return run;

});