function setup() {
    var canvas = createCanvas(500, 500);
    canvas.parent("canvas-holder")
    img = loadImage('assets/peanut_cartoon.png'); // Load the image
  }
  
  function draw() {
    background("#1d2021");
    image(img,200,200,100,100);
  }


 