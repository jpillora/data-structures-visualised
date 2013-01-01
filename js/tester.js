define([], function() {

  var random = function(digits) {
    var factor = Math.pow(10, digits);
    return Math.round(Math.random()*factor);
  };

  var isSorted = function(s) {

    if(!s.toArray)
      throw "STRUCTURE MISSING 'TO ARRAY'";

    var a = s.toArray(),
        last = a[0],
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

  return function(Structure) {

    var s = new Structure();

    window[s.toString()] = s;

    if(!s.insert)
      throw "STRUCTURE MISSING 'INSERT'";

    for(var i = 0; i < 10; ++i)
      s.insert(random(2));

    isSorted(s);
  };

});