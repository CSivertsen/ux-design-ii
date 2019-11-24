let capture;
let cropFrame;
let savedFrame = []; //All snapshots are saved in an array. This is probably unneccesary.
let frameWidth = 640; //Used for controlled the size of the canvas
let frameHeight = 480;
let painting;
let snapshotTaken = false; //Used for toggling the painting view on and off.

function setup() {
  createCanvas(frameWidth, frameHeight);
  capture = createCapture(VIDEO);
  //capture.size(320, 240);
  capture.hide(); // Call the function to hide the original video feed. It is showed in a separate <video> element. You can see this in the inspector.
  painting = loadImage("KMSKMS359.jpg"); // Loading an image to act as the painting
}

function draw() {
  background(255);
  image(capture, 0, 0); //Show the video feed. For some reason, this freezes after .get() is used on it the first time. If you need a constantly running feed, you can use the other <video> element that  is drawn outside the p5 canvas.
  if(snapshotTaken){ //Check if a snapshot has been taken
      image(painting, 0, 0, frameWidth, frameHeight); //Drawing the painting to fill out the full canvas.
      image(cropFrame, capture.width/2-25, capture.height/2+25, 25, 37); //Drawing the cropped snapshot, in a small size on a specific place on the painting.
  } else {
    strokeWeight(4);
    stroke(255,255,0);
    noFill();
    rect(capture.width/2 - 100, capture.height / 2 - 150, 200, 300); //Draw a rectangle so you can see, where the image will be cropped.
  }
}

function takeSnapshot() { //Function for taking the snapshot
  savedFrame.unshift(capture.get()); //Using .get() to get the image data from the current capture frame. Unshif() is used to put the new snapshot in the front of the array.
  pictureTaken = true; //Flip the boolean so we know that a picture has been taking
  //capture.hide();
  cropSnapshot();
}

function cropSnapshot(){ //Takes the newest snapshot and saves it in a cropped version
  cropFrame = savedFrame[0].get(capture.width/2 - 100, capture.height / 2 - 150, 200, 300);
}

function keyPressed() {
  if (key == 'x') { // x triggers a snapshot
    takeSnapshot();
  } else if (key == 'z') { // z let's us go back to the original webcam view
    snapshotTaken = false;
  }
}
