define(['lib/cake', 'jquery'], function() {

  var elem = E.canvas(0, 0);
  var canvas = new Canvas(elem);
  canvas.fill = [255,255,255,0.8];
  canvas.clear = false;

  $('body').append(elem);

  function resizeCanvas() {
    elem.width = window.innerWidth;
    elem.height = window.innerHeight;

    $(elem).trigger('redraw');
  }

  $(window).resize(resizeCanvas);
  resizeCanvas();

  canvas.elem = elem;
  window.canvas = canvas;
  return canvas;
});