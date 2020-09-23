var fixedRect, movingRect;
var object1, object2, object3, object4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  object1 = createSprite(100,100,50,50)
  object1.shapeColor = "Green";

  object2 = createSprite(200,100,50,50)
  object2.shapeColor = "Green";

  object3 = createSprite(300,100,50,50)
  object3.shapeColor = "Green";

  object4 = createSprite(400,100,50,50)
  object4.shapeColor = "Green";

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  

  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  
 bounceOff(movingRect,fixedRect);

  if(isTouching(movingRect,object1))
  {
    movingRect.shapeColor = "Aqua";
    object1.shapeColor = "Aqua";
  }
  else
  {
    movingRect.shapeColor = "Green";
    object1.shapeColor = "Green";
  }

  drawSprites();
}
