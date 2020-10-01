let button;

function setup() {
  createCanvas(400,400);
  button = createButton("PRESS");
  button.mouseClicked(moveButton);
  button.size(200,100);
  button.position(10,10);
  button.style("Helvectica");
  button.style("font-size", "48px");
  button.style("color","#eaf205")
}

function draw (){
  background(0);
}

function moveButton() {
  button.position (random(width), random(height));
}
