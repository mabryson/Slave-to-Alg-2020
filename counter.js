var clicks = 0;

function setup() {
  createCanvas(100, 100);
}

function draw() {
  background(0);
  //text formatting
  noStroke();
  fill(255);
  textSize(20);
  textAlign(LEFT, BASELINE);
  //displaying number of clicks
  text(clicks, width/5, height/1.1);
}

//function is called when user clicks
function mousePressed() {
  //add 1 to variable clicks
  clicks ++;
}
