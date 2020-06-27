var s = function (p){
  let song;
  let playpause;
  let body;
  let now;
  let inter;
  let colortime;
  let col1;
  let col2;
  p.preload = function() {
    song = p.loadSound('image/filteredtrack.wav',p.loaded());
    playpause = p.loadImage('image/playbutton.png');
    body = p.loadImage('image/body.png');
  };
  p.loaded = function() {
    console.log("loaded");
  }
  p.setup = function()  {
    canvas = p.createCanvas(350,70);
    canvas.position(0,0);
    canvas.style('position','relative');
    canvas.style('margin-top','50px');

    p.image(playpause,0,-2,65,65);
    p.noStroke();
    p.fill(0);
    p.rect(80,16,250,30);
    p.image(body,65,0,280,70);

  };

  p.draw = function(){
    if(p.mouseX<=65&&p.mouseY<=65){
      p.cursor(p.HAND);
    }
    else{
      p.cursor(p.ARROW);
    }
    now = p.map(song.currentTime(),0,146,100,295);
    colortime = p.map(song.currentTime(),0,146,0,255);
    c1 = p.color(colortime,255-colortime,200);
    c2 = p.color(colortime,50,colortime);
    inter = p.map(song.currentTime(),0,146,90,30);
    let c = p.lerpColor(c1,c2,inter);
    p.fill(c);
    p.ellipse(now,38,2,2);

  };
  p.mousePressed = function(){
    if(p.mouseX<=45&&p.mouseY<=45){
      p.togglePlaying();
    }
  }
  p.togglePlaying = function(){
    if (!song.isPlaying()) {
      song.play();
      }
    else {
      song.pause();
     }

  }
}

var myp5 = new p5(s, 'c1');
