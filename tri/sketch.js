// save this file as sketch.js
// Sketch One
var s;
var t;
s = function( p ) { // p could be any variable name

  let bgMusic;


  p.preload = function(){
    bgMusic = p.loadSound('media/background.mp3');
  }
  p.setup = function() {

    bgMusic.loop();

  };

  p.draw = function() {

  };
};

var myp5 = new p5(s, 'c1');

// Sketch Two
t = function( p ) {
  var canvasL = 267;


   let buttonA;
   let buttonB;
   let buttonC;
   let buttonD;
   let buttonE;
   let buttonF;
   let musicA;
   let musicB;
   let musicC;
   let musicD;
   let musicE;
   let musicF;

  p.preload = function() {
      musicA = p.loadSound('media/a.mp3');
      musicB = p.loadSound('media/b.mp3');
      musicC = p.loadSound('media/c.mp3');
      musicD = p.loadSound('media/d.mp3');
      musicE = p.loadSound('media/e.mp3');
      musicF = p.loadSound('media/f.mp3');
    };
  p.setup = function() {
    canvas = p.createCanvas(canvasL, canvasL);
    canvas.position(113,151);

    p.background(0);
    buttonA=p.createButton('candyland');
    buttonA.position(-400,380);
    buttonB=p.createButton('cocoon');
    buttonB.position(-270,350);
    buttonC=p.createButton('.・。.・゜✭・glitterfest・✫・゜・。. ');
    buttonC.position(-200,300);
    buttonD=p.createButton('Lethal Dose Dream Girl');
    buttonD.position(390,300);
    buttonE=p.createButton('forever');
    buttonE.position(590,340);
    buttonF=p.createButton('in my dreams...');
    buttonF.position(800,300);

  };

  p.draw = function() {
    buttonA.mousePressed(p.playmusicA);
    buttonB.mousePressed(p.playmusicB);
    buttonC.mousePressed(p.playmusicC);
    buttonD.mousePressed(p.playmusicD);
    buttonE.mousePressed(p.playmusicE);
    buttonF.mousePressed(p.playmusicF);

  };

  p.playmusicA = function() {
    musicA.play();
   }
  p.playmusicB = function() {
    musicB.play();
   }
  p.playmusicC = function() {
    musicC.play();
   }
  p.playmusicD = function() {
    musicD.play();
   }
  p.playmusicE = function() {
    musicE.play();
   }
  p.playmusicF = function() {
    musicF.play();
    buttonF.mouseClicked(window.open('../credits/index.html'))

   }
};
var myp5 = new p5(t, 'c2');
