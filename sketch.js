var car, wall;
var speed, weight;

function setup() {
  createCanvas(1600,400);
  car = createSprite(50, 200, 40, 10);
  car.shapeColor = "lightblue"
  
  wall = createSprite(1500,200,60,height/2)
  wall.shapeColor = "black"

  speed = random(55,90)
  weight = random (400,1500)
  car.velocityX = speed;
}

function draw() {
  background(105,105,105);  
  
  if (wall.x-car.x < (wall.width + car.width)/2){
  car.velocityX = 0;
    var deformation = 0.5 * weight * height *speed * speed/22500
  if (deformation > 180)
  {
  car.shapeColor = "pink"
  }
  if (deformation < 180 && deformation > 100)
  {
    car.shapeColor = "lightyellow"
    }
  if (deformation < 100)
  {
      car.shapeColor = "lightgreen"
      }
    }
    drawSprites();
}