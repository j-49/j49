var s = function (p){
  let pills;
  var imgDiv;
   p.preload = function() {
    pills = p.loadImage('media/viagra.png');
   };

  p.setup = function() {
    canvas = p.createCanvas(275,205);
    canvas.position(152,103);
    p.background(150);

   // Select imgDiv by id and change position and width/height
   imgDiv = p.select("#imgDiv");
   imgDiv.position(152, 103);
   imgDiv.style("z-index", "11");
   imgDiv.style("width", p.width+ "px");
   imgDiv.style("height", "221px");

  };

  p.draw = function() {

  };
  p.mousePressed = function() {
    // Hide imgDiv if you click or touch outside of it
    if (!(p.mouseX > 0 && p.mouseX < 275 && p.mouseY > 0 && p.mouseY < 205)) {
      imgDiv.hide();
    }
  };

  p.mouseReleased = function(){
  	// show imgDiv once click or touch is released
    imgDiv.show();
  };

}

var myp5 = new p5(s, 'c1');
