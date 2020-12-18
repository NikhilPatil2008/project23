var bullet ,wall;
var speed,weight,thickness;

function setup() {
  createCanvas(800,400);
  
  speed=random(30,100);
  weight=random(400,1500);
  thickness=random(20,80)
  
  bullet=createSprite(20,200,20,10);
  bullet.velocityX=speed;
  bullet.shapeColor="white";
 
  wall=createSprite(720,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);
 
}

function draw() {
  background(0);  

    if(thickness<60 && bullet.isTouching(wall)){
      wall.shapeColor="red";
    }
    if(thickness>60 && bullet.isTouching(wall)){
      wall.shapeColor="green";
    }
    
   
   
   bullet.collide(wall);
   drawSprites();
}