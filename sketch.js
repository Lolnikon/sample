

var fixedRectangle, movingRectangle;






function setup() {
  createCanvas(1000,1000);
  fixedRectangle = createSprite(200,200,50,50);
  movingRectangle = createSprite(100,100,50,50);
  movingRectangle.shapeColor = "pink"
  fixedRectangle.shapeColor = "pink"
}

function draw() {
  background(255,255,255);  
  movingRectangle.x = World.mouseX;
  movingRectangle.y = World.mouseY;

  if((movingRectangle.x - fixedRectangle.x<=movingRectangle.width/2+fixedRectangle.width/2) &&
  (movingRectangle.y - fixedRectangle.y<=movingRectangle.width/2+fixedRectangle.width/2) && 
  (fixedRectangle.x - movingRectangle.x<=movingRectangle.width/2+fixedRectangle.width/2) &&
  (fixedRectangle.y - movingRectangle.y<=movingRectangle.width/2+fixedRectangle.width/2)){
    movingRectangle.shapeColor = "blue"
    fixedRectangle.shapeColor = "blue"
  }
else{
  movingRectangle.shapeColor = "pink"
  fixedRectangle.shapeColor = "pink"
}
  drawSprites();
}