var sea;
var ship;
function preload(){
seaImage = loadImage("sea.png");
shipImage=loadAnimation("ship-1.png","ship-2.png")
}

function setup(){
  createCanvas(1300,1300);
 
  sea=createSprite(200,200,400,400)
  sea.addImage("GURU",seaImage);
  sea.scale=1;

  ship=createSprite(200,200,20,20)
ship.addAnimation("BABA",shipImage)
ship.scale=0.5
}

function draw() {
sea.velocityX=-3
if(sea.x<0){
  sea.x=sea.width/2
}
  background("blue");
 drawSprites();
}