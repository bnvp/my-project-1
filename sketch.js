var soldier ;
var ground;
var background;

function preload(){
  soldierImage=loadImage("img/img 1.png");
  backGroundImage=loadImage("img/img last.jfif");
} 
function setup() {
  createCanvas(800,400);
 soldier= createSprite(500, 150,50, 50);
soldier.addImage(soldierImage);
soldier.scale=0.5
ground=createSprite(300,380,800,20)

backGround=createSprite(400,200,360,360);
backGround.addImage(backGroundImage);
backGround.scale=3
}

function draw() {
  background(0); 
  if(keyDown("space")){
    soldier.velocityY=-4;
  } 
  soldier.velocityY=soldier.velocityY+0.8;  
  soldier.collide(ground);
  drawSprites();
}