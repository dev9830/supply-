var car ,wall;
var speed,weight;

car=createsprite(50,200,50,50);
wall=createsprite(1500,200,60,height/2);

function setup() 
{
  speed=random(55,90);
weght=random(400,1500);
createCanvas(1600,400);

}

 




function draw() {
  
  background(255,255,255); 

  car.velocityX=speed;
  
  drawSprites();
}
function display() {
  wall.display();
  car.display();
}

