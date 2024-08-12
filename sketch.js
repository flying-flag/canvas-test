function setup() {
  createCanvas(400, 400);
}

var frame = 0;
var x = 0;
var y = 0;

function draw() {
  background(255);
  fill(255, 0, 0);
  var x = sin(frame/10)*100+200
  var y = cos(frame/10)*100+200
  circle(x, y, 50);
  frame++;
}