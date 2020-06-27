// save this file as sketch.js
// Sketch One
var s;
var t;


s = function( p ) {
  var canvasL = 267;
  let x;
  let y;
  let a;
  let b;
  let move1;
  let move2;
  let bgMusic;


  p.preload = function() {
    move1 = p.loadSound('media/move1.mp3');
    move2 = p.loadSound('media/move2.mp3');
    bgMusic = p.loadSound('media/background.mp3');


  }
  p.setup = function() {
    canvas = p.createCanvas(canvasL, canvasL);
    canvas.position(113,151);

    x = 3;
    y = 3;
    a = 217;
    b = 217;
    bgMusic.loop();


  };

  p.draw = function() {
    p.background(0);
   };

  p.keyPressed = function() {
    switch (p.keyCode){
      case p.LEFT_ARROW:
      p.left1();
      break;

      case p.RIGHT_ARROW:
      p.right1();
      break;

      case p.UP_ARROW:
      p.up1();
      break;

      case p.DOWN_ARROW:
      p.down1();
      break;

    }
  };
  p.keyTyped = function(){
    switch (p.key){
      case 'a':
      p.left2();
      break;

      case 'd':
      p.right2();
      break;

      case 'w':
      p.up2();
      break;

      case 's':
      p.down2();
      break;

    }
  };

  p.left1 = function() {
    a = a-43;
    move1.play();
  };
  p.right1 = function() {
    a=a+43;
    move1.play();
  };
  p.up1 = function() {
    b=b-43;
    move1.play();
  };
  p.down1 = function() {
    b=b+43;
    move1.play();
  };

  p.left2 = function() {
    x = x-43;
    move2.play();
  };
  p.right2 = function() {
    x=x+43;
    move2.play();
  };
  p.up2 = function() {
    y=y-43;
    move2.play();
  };
  p.down2 = function() {
    y=y+43;
    move2.play();
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
   let buttonF;
   let buttonG;
   let buttonH;
   let musicA;
   let musicB;
   let musicC;
   let musicD;
   let musicE;
   let musicF;
   let musicG;
   let musicH;
   let p2;
  p.preload = function() {
    musicA = p.loadSound('media/a.mp3');
    musicB = p.loadSound('media/b.mp3');
    musicC = p.loadSound('media/c.mp3');
    musicD = p.loadSound('media/d.mp3');
    musicE = p.loadSound('media/e.mp3');
    musicF = p.loadSound('media/f.mp3');
    musicG = p.loadSound('media/g.mp3');
    musicH = p.loadSound('media/h.mp3');
  };
  p.setup = function() {
    buttonA=p.createButton('cellar in the sky');
    buttonA.position(-400,300);
    buttonB=p.createButton('eternity:honey');
    buttonB.position(-280,300);
    buttonC=p.createButton('rodeo');
    buttonC.position(-165,300);
    buttonD=p.createButton('smut baby');
    buttonD.position(-100,300);
    buttonE=p.createButton('breathe carolina! ｡･ﾟﾟ*(>д<)*ﾟﾟ･｡');
    buttonE.position(400,280);
    buttonF=p.createButton('space bitch');
    buttonF.position(500,300);
    buttonG=p.createButton('so sad to see you go');
    buttonG.position(600,300);
    buttonH=p.createButton('ᎴᎴᎴᎴᎴᎴᎴᎴᎴᎴᎴᎴᎴᎴᎴᎴᎴᎴᎴᎴᎴᎴᎴᎴᎴᎴᎴᎴᎴᎴᎴᎴᎴᎴᎴᎴᎴᎴᎴᎴᎴᎴᎴᎴᎴᎴᎴᎴᎴᎴᎴᎴᎴᎴᎴᎴᎴᎴᎴᎴᎴᎴᎴᎴᎴ');
    buttonH.position(700,330);
  };

  p.draw = function() {
    buttonA.mousePressed(p.playmusicA);
    buttonB.mousePressed(p.playmusicB);
    buttonC.mousePressed(p.playmusicC);
    buttonD.mousePressed(p.playmusicD);
    buttonE.mousePressed(p.playmusicE);
    buttonF.mousePressed(p.playmusicF);
    buttonG.mousePressed(p.playmusicG);
    buttonH.mousePressed(p.playmusicH);

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
  }
  p.playmusicG = function() {
    musicG.play();
  }
  p.playmusicH = function() {
    musicH.play();
    p2 = p.createA('../blog/index.html','W');
    p2.style('text-decoration','none');
    p2.style('width','267');
    p2.style('height','267');
    p2.style('font-size','269px');
    p2.position(113,151);
    p2.style('color','rgba(0,0,0,0)');
    p2.mouseClicked(window.open('../bandcamp/music.html'))


  }
};
var myp5 = new p5(t, 'c2');
