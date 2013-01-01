define([
    './tester',
    './tree/redblack',
    'lib/cake',
    'jquery'
  ], function(
    tester,
    redblack
  ) {
  

  

  var c = E.canvas(1, 1);



  var canvas = new Canvas(c);
  canvas.fill = [255,255,255,0.8];
  canvas.clear = false;
  var rect = new Rectangle(100, 100);
  rect.x = 250;
  rect.y = 250;
  rect.fill = 'green';
  rect.addFrameListener(function(t) {
    this.rotation = ((t / 3000) % 1) * Math.PI * 2;
  });
  canvas.append(rect);
  document.body.appendChild(c);

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

    if(s.draw) s.draw(paper);

    console.log(s + " passed");
    return true;
  });

});