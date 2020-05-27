var fixedRect, movingrect;
var dummy,dummy2;
var rect,rect2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  movingrect = createSprite(400, 800,80,30);
  movingrect.shapeColor = "green";

  movingrect.velocityY = -5;
  fixedRect.velocityY = +5;

  dummy = createSprite(400,200,50,80);
  dummy.shapeColor = "yellow";

  dummy2 = createSprite(400,700,80,50);
  dummy2.shapeColor = "yellow";

  dummy.velocityY = +6;
  dummy2.velocityY = -6;

  rect = createSprite(1,200,50,80);
  rect.shapeColor = "white";

  rect2 = createSprite(1200,200,50,80);
  rect2.shapeColor = "white";

  rect.velocityX = +4;
  rect2.velocityX = -4;
}

function draw() {
  background(0,0,0);  
  
  drawSprites();
  
  bounceOff(movingrect,fixedRect);
  bounceOff(dummy,dummy2);
  bounceOff(rect,rect2);
}
function bounceOff(obstacle1,obstacle2){
  if (obstacle2.x - obstacle1.x < obstacle1.width/2 + obstacle2.width/2
    && obstacle1.x - obstacle2.x < obstacle1.width/2 + obstacle2.width/2) {
  obstacle2.velocityX = obstacle2.velocityX * (-1);
  obstacle1.velocityX = obstacle1.velocityX * (-1);
}
if (obstacle2.y - obstacle1.y < obstacle1.height/2 + obstacle2.height/2
  && obstacle1.y - obstacle2.y < obstacle1.height/2 + obstacle2.height/2){
  obstacle2.velocityY = obstacle2.velocityY * (-1);
  obstacle1.velocityY = obstacle1.velocityY * (-1);
}
}