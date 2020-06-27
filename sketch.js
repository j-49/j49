var s = function (p){
  let introMusic;
  let bImg;
  let heart;
  let b = 0;
  var fr = 3;
  var musicRate=1;
  let t=0;
  var canvasL = 267;
  let p2;
  let button;

  p.preload = function() {
    bImg = p.loadImage('media/bgFinal.png');
    heart = p.loadImage('media/bgbgbg.jpg');
    introMusic = p.loadSound('media/breakbot washing machine reverse.mp3');

  };

  p.setup = function()  {
    canvas = p.createCanvas(canvasL,canvasL);
    canvas.position(113,151);
    p.background(bImg);
    p.frameRate(fr);
    button = p.createButton('play');
    button.position(0,200);
    button.mousePressed(p.playmusic);


  };

  p.draw = function(){
     if(introMusic.isPlaying()==true){
      t = p.map(introMusic.currentTime(),7,introMusic.duration(),0,127);
      p.tint(255,t);
      if(introMusic.duration()-introMusic.currentTime()<0.08){
        b += 1;
      }
      p.image(heart,0,0,canvasL,canvasL);
     }
    if(b>=1){
      t = 255;
     p.image(heart,0,0,canvasL,canvasL);
    }
    if(introMusic.currentTime()>=31){
      p2 = p.createA('../page2/index.html','W');
      p2.style('text-decoration','none');
      p2.style('width','267');
      p2.style('height','267');
      p2.style('font-size','269px');
      p2.position(113,151);
      p2.style('color','rgba(0,0,0,0)');

    }

  };
  p.playmusic = function(){
    introMusic.play();
  }
}

var myp5 = new p5(s, 'window');
