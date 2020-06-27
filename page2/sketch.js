var s = function (p){
  let music;
  let bImg;
  let heart;
  let luvwave;
  var canvasL = 305;
  let luvx = -150;
  let luvy = -300;

  p.preload = function() {
    music = p.loadSound('media/1 melancholy full2.mp3');
   };

  p.setup = function() {
    canvas = p.createCanvas(p.windowWidth,p.windowHeight);
    canvas.position(0,0);
    canvas.style('z-index','-3');
    music.loop();
    p.cursor('grab');
  };

  p.draw = function() {
    p.background(130);
  };

}

var myp5 = new p5(s, 'body');
