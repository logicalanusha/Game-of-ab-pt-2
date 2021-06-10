var a, b;

function setup() {
  createCanvas(800,400);
  a= createSprite(400, 200, 50, 50);
  a.shapeColor = "red";
  b= createSprite(170, 130, 50, 50);
  b.shapeColor = "blue";
  b.velocityX = 2;
  b.velocityY = 1;
}

function draw() {
  background("grey");  
  drawSprites();

  //b.x = mouseX;
  //b.y = mouseY;

  if (touch(a,b)) {
    a.shapeColor= "green";
    b.shapeColor = "green";
  }
  else {
    a.shapeColor = "red";
    b.shapeColor = "blue";
  }

  bounce(a,b);
}
