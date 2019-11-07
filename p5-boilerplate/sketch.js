//In p5 always start with a setup() function
function setup() {
  //createCanvas determines the size of the canvas where your p5 sketch runs
  createCanvas(640, 480);
}

//And you should also have a draw() function. This is called over and over again and makes it easy to animate things.
function draw() {
  //Check if the mouse is pressed
  if (mouseIsPressed) {
    //If it is, set the fill color of the following shapes to 0 (Black)
    fill(0);
  } else {
    //If not, set it to 255 (White)
    fill(255);
  }
  //Ellipse() draws a circle that will have the fill color defined above
  ellipse(mouseX, mouseY, 80, 80);
}
