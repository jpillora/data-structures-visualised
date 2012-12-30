define([
  './tester',
  './tree/redblack'
  ], function(
  tester,
  redblack
  ) {
  

  var structures = [
    redblack
  ];

  structures.forEach(function(s) {

    try {
      tester(s);
    } catch(e) {
      console.log(s + " failed: " + e);
      return false;
    }

    console.log(s + " passed");
    return true;
  });

});