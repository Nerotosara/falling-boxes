
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var grnd;
var box1;
var box2;

function setup() {
  createCanvas(400,400);
  //createSprite(400, 200, 50, 50);
  engine = Engine.create();
  world = engine.world;

  /*var grounds={
      isStatic: true 

  }
  var bounce={
    restitution:0.7
  }
  ground = Bodies.rectangle(200,390,400,30,grounds);
 ball=Bodies.circle(100,200,20,bounce);
  World.add(world,ground);
  World.add(world,ball);
  console.log(ground.position.x);
  console.log(ground.position.y);*/


  grnd = new Ground(200,385,400,30);
  box1 = new boxes(200,300,50,50);
  box2 = new boxes(240,200,50,100);
}

function draw() {
  background(0);
  Engine.update(engine);
  /*rectMode(CENTER);  
  fill("green");
  rect(ground.position.x,ground.position.y,400,30);  
  ellipseMode(RADIUS);
  fill("blue");
  ellipse(ball.position.x,ball.position.y,20);*/
    


  grnd.display();
  box1.display();
  box2.display();
 // drawSprites();
}