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
    p.cursor('grab');
    button = p.createButton('play');
    button.position(113,400);
    button.mousePressed(p.playmusic);
  };

  p.draw = function() {
    p.background(130);
  };
  p.playmusic = function(){
    music.loop();
  };


}

var myp5 = new p5(s, 'body');
