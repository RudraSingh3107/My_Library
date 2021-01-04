var fixedRect, movingRect;
var rect1, rect2, rect3, rect4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  //fixedRect.debug = true;

  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  //movingRect.debug = true;

  rect1 = createSprite(40,600,80,30);
  rect1.shapeColor = "green";
  rect1.debug = true;
  rect1.velocityX = 5;

  rect2 = createSprite(1160,600,80,30);
  rect2.shapeColor = "green";
  rect2.debug = true;
  rect2.velocityX = -5;

  rect3 = createSprite(700,50,80,30);
  rect3.shapeColor = "green";

  rect4 = createSprite(600,100,80,30);
  rect4.shapeColor = "green";
}

function draw() {
  background(0,0,0); 

  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isCollision(movingRect,rect3)){

    movingRect.shapeColor = "red";
    rect3.shapeColor = "red";
  }
  else {

    movingRect.shapeColor = "green";
    rect3.shapeColor = "green";
  }

  isBounceOff(rect1,rect2);
  drawSprites();
}

function isBounceOff (object1,object2){

  if(object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2){

      object1.velocityX = object1.velocityX * (-1);
      object2.velocityX = object2.velocityX * (-1);
  }

  /*if(object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2){

      object1.velocityY = object1.velocityY * (-1);
      object2.velocityY = object2.velocityY * (-1);
  }*/
}