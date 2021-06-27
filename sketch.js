var bg,bgImg;
var sleepImg;
var brushImg;
var gymImg;
var eatImg;
var drinkImg;
var moveImg;
var astro;

function preload(){
  bgImg = loadImage("iss.png");
  sleepImg = loadAnimation("sleep.png");
  brushImg = loadAnimation("brush.png");
  gymImg = loadAnimation("gym1.png","gym2.png");
  eatImg = loadAnimation("eat1.png","eat2.png");
  drinkImg = loadAnimation("drink1.png","drink2.png");
  bathImg = loadAnimation("bath1.png","bath2.png");
  moveImg = loadAnimation("move1.png","move2.png");
}

function setup() {
  createCanvas(1000,600);

  bg = createSprite(475, 300, 100, 100);
  bg.addImage(bgImg);
  bg.scale = 0.250;

  astro = createSprite(500,430);
  astro.addAnimation("sleeping",sleepImg);
  astro.scale = 0.100;
}

function draw() {
  background("black");  

  edges = createEdgeSprites();
  astro.bounceOff(edges);

  drawSprites();
  
  if (keyDown("b")){
    astro.addAnimation("brushing",brushImg);
    astro.changeAnimation("brushing");
    astro.y = 430;
    astro.velocityX = 0;
    astro.velocityY = 0;
  }

  if (keyDown("g")){
    astro.addAnimation("gymming",gymImg);
    astro.changeAnimation("gymming");
    astro.y = 430;
    astro.velocityX = 0;
    astro.velocityY = 0;
  }

  if (keyDown("e")){
    astro.addAnimation("eating",eatImg);
    astro.changeAnimation("eating");
    astro.y = 430;
    astro.velocityX = -1;
    astro.velocityY = -1;
  }
  
  if (keyDown("d")){
    astro.addAnimation("drinking",drinkImg);
    astro.changeAnimation("drinking");
    astro.y = 430;
    astro.velocityX = 0;
    astro.velocityY = 0;
  }
  
  if (keyDown("a")){
    astro.addAnimation("bathing",bathImg);
    astro.changeAnimation("bathing");
    astro.y = 430;
    astro.velocityX = 0;
    astro.velocityY = 0;
  }

  if(keyDown("s")){
    astro.changeAnimation("sleeping");
    astro.y = 430;
    astro.velocityX = 0;
    astro.velocityY = 0;
  }

  if(keyDown("m")){
    astro.addAnimation("moving",moveImg);
    astro.changeAnimation("moving");
    astro.velocityX = -1;
    astro.velocityY = -1;
  }
  
  fill("black");
  textSize(12);
  text("PRESS 'S' TO SLEEP",50,25);
  text("PRESS 'B' TO BRUSH",50,50);
  text("PRESS 'A' TO BATH",50,75);
  text("PRESS 'G' TO GYM",50,100);
  text("PRESS 'E' TO EAT",50,125);
  text("PRESS 'D' TO DRINK",50,150);
  text("PRESS 'M' TO MOVE",50,175);
}