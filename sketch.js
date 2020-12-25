var car;
var wall;
var speed;
var weight;

function setup(){
   createCanvas(1600,400)
   car=createSprite(200,250,50,30)
   car.velocityX=7;
   car.shapeColor="red"
   wall=createSprite(1250,250,20,200)
   wall.shapeColor="green"
   speed=random(1,500)
   weight=random(1,2500)
}
function draw(){
   background("black")
if( car.x-wall.x<car.width/2+wall.width/2
  && wall.x-car.x<car.width/2+wall.width/2
 && car.y-wall.y<car.width/2+wall.width/2
  && wall.y-car.y<car.width/2+wall.width/2){

   car.velocityX=0
var deformation=0.5*speed*weight*speed/22509
if(deformation>180){
   car.shapeColor="blue"
}
if(deformation>100&&deformation<180){
   car.shapeColor="yellow"
}
if(deformation<100){
   car.shapeColor="green"
}
  }
  drawSprites()
}


   
