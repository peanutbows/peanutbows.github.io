let canvasWidth = 1000;
let canvasHeight = 400;
let width = 50;
let height = 50;
let x = (canvasWidth / 2) -( width / 2 );
let y = 100;
let mouseCoordArray = [];
let fontSize = 25;
let peanutMass = 8;
let accelX = 0;
let accelY = 0;
let speedX = 0;
let speedY = 0;
let gravity = 1.5;
let wallElastisty = 1.8;
let wallFriction = 0.02;
let peanutIsFrozen = true;

function setup() {
    var canvas = createCanvas(canvasWidth, canvasHeight);
    textAlign(LEFT);
    textFont('Helvetica');
    textSize(fontSize);
    
    canvas.parent("canvas-holder")
    img = loadImage('data:image/png;base64,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'); // Load the image
  }
  
function collision()
{
  var collision = [0,0];

  if (x + width >= canvasWidth)
  {
    collision[0] =  -1;
  }
  if(x <= 0)
  {
    collision[0] = 1;
  }

  if(y + height >= canvasHeight)
  {
    collision[1] = - 1
  }

  if(y <= 0)
  {
    collision[1] = 1;
  }

  return collision;
}

function out_of_bounds()
{
  var bounds_correction = [0,0];

  if (x + width >= canvasWidth)
  {
    bounds_correction[0] = canvasWidth - x - width - 1;
  }
  if(x <= 0)
  {
    bounds_correction[0] = Math.abs(x) + 1;
  }

  if(y + height >= canvasHeight)
  {
    bounds_correction[1] =  canvasHeight - y - height - 1;
  }

  if(y <= 0)
  {
    bounds_correction[1] = Math.abs(y) + 1;
  }

  return bounds_correction;
}


function mouse_in_boundry()
{
  let returnValue = mouseX >= x && mouseX <= x + width && mouseY >= y && mouseY <= y + height;
  return returnValue;
}

function tickle_peanut()
{
  let coll = collision();
  x += coll[0];
  y += coll[1];
  x += random(-5, 5);
  y += random(-5, 5);
  
}


function draw() {
  background("#1d2021");
  stroke("#f9f5d7");
  
  
  
  
  
  
  let infoString = "";
  
  
 
    //tickle_peanut();
    if(mouseIsPressed) 
    {
      if(mouseCoordArray.length == 0 && mouse_in_boundry())
      {
        mouseCoordArray[0] = [mouseX, mouseY];
        infoString = infoString.concat(" MousePressX: ");
        infoString = infoString.concat(mouseCoordArray[0][0]);
        infoString = infoString.concat(" MousePressY: ");
        infoString = infoString.concat(mouseCoordArray[0][1]);
        
      }
      
      if(mouseCoordArray.length >= 1)
      {
        mouseCoordArray[1] = [mouseX, mouseY];
        line(mouseCoordArray[0][0], mouseCoordArray[0][1], mouseCoordArray[1][0], mouseCoordArray[1][1]);
        let forceX = mouseCoordArray[0][0] - mouseCoordArray[1][0]; 
        let forceY = mouseCoordArray[0][1] - mouseCoordArray[1][1];
        let totalForce = Math.sqrt(Math.pow(forceX, 2) + Math.pow(forceY, 2));

        infoString = infoString.concat(" StrokeStartX: ");
        infoString = infoString.concat(mouseCoordArray[0][0]);
        infoString = infoString.concat(" StrokeStartY: ");
        infoString = infoString.concat(mouseCoordArray[0][1]);
        infoString = infoString.concat(" StrokeEndX: ");
        infoString = infoString.concat(mouseCoordArray[1][0]);
        infoString = infoString.concat(" StrokeEndY: ");
        infoString = infoString.concat(mouseCoordArray[1][1]);
        infoString = infoString.concat(" ForceX: ");
        infoString = infoString.concat(forceX.toString());
        infoString = infoString.concat(" ForceY: ");
        infoString = infoString.concat(forceY.toString());
        infoString = infoString.concat(" TotalForce: ");
        infoString = infoString.concat(totalForce.toString());
  


      }
      
  }
  else
  {
    if(mouseCoordArray.length >= 1)
    {
      peanutIsFrozen = false;
    }
    if( mouseCoordArray.length == 2)
    {
      let forceX = mouseCoordArray[0][0] - mouseCoordArray[1][0]; 
      let forceY = mouseCoordArray[0][1] - mouseCoordArray[1][1];
      accelX += forceX / peanutMass;
      accelY += forceY / peanutMass;
      
      
    }
    mouseCoordArray = [];
  }
  if(!peanutIsFrozen)
  {
    accelY += gravity;
    speedX += accelX;
    speedY += accelY;
    accelY = 0;
    accelX = 0;
    
    // speedX += speedX * 2 *  collXNorm;
    // speedY += speedY * 2 *  collYNorm;
    x += speedX;
    y += speedY;
    let coll = collision();
    let collNegativeX = (Math.abs(coll[0]) / -1 );
    let collNegativeY = (Math.abs(coll[1]) / -1 );
    let bounds_correction = out_of_bounds();
    x += bounds_correction[0];
    y += bounds_correction[1];
    speedX +=  speedX * wallElastisty * collNegativeX;
    speedY += speedY  * wallElastisty * collNegativeY;
    speedX += speedX * wallFriction * collNegativeY;
    speedY += speedY * wallFriction * collNegativeX;
  }
  
  image(img,x,y,width,height);

  // Uncomment for debug mode.
  //fill(255);
  //text(infoString,0,canvasHeight - fontSize);
  
  
}


