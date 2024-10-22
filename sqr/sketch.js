// save this file as sketch.js
// Sketch One
var s;
var t;
s = function( p ) { // p could be any variable name

  let bgMusic;

  p.preload = function() {
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
   let buttonA;
   let buttonB;
   let buttonC;
   let buttonD;
   let buttonE;
   let musicA;
   let musicB;
   let musicC;
   let musicE;
   let caterpillar;
   var canvasL = 267;
   let mosaic;

  p.preload = function() {
    musicA = p.loadSound('media/a.mp3');
    musicB = p.loadSound('media/d.mp3');
    musicC = p.loadSound('media/c.mp3');
    musicE = p.loadSound('media/e.mp3');
   };
  p.setup = function() {
    canvas = p.createCanvas(canvasL, canvasL);
    canvas.position(113,151);
    buttonA=p.createButton('the center');
    buttonA.position(-400,300);
    buttonB=p.createButton('745 stickier');
    buttonB.position(-280,300);
    buttonC=p.createButton('mermelade');
    buttonC.position(-165,300);
    buttonD=p.createButton('The Acyclovir Angels Want You To Open Your Heart & Be Taken In Again');
    buttonD.position(340,300);
    buttonE=p.createButton('cum');
    buttonE.position(580,380);
    buttonD.style('z-index','3');
 


  };

  p.draw = function() {
    p.background(0);
    buttonA.mousePressed(p.playmusicA);
    buttonB.mousePressed(p.playmusicB);
    buttonC.mousePressed(p.playmusicC);
    buttonD.mousePressed(p.playmusicD);
    buttonE.mousePressed(p.playmusicE);
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
     mosaic = p.createImg('media/mosaic.png');
     mosaic.position(113,151);
     mosaic.style('width','267px');
     mosaic.style('opacity','0');
     mosaic.mouseClicked(window.open('../blog/index.html'))



   }
   p.playmusicE = function() {
     musicE.play();
    }
};
var myp5 = new p5(t, 'c2');
