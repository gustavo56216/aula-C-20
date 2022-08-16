const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


let engine;
let world;
var ball;
var ground;
var wedge;
var angle=60;
var poly;
var square;
var reta;
function setup() {
  
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  var square_options = {
    restitution : 0.7,
    frictionAir : 0.01,
    friction:0.01,

  }


  var reta_options = {
    restitution : 0.01,
    frictionAir : 0.4,
    friction:1,

  }
  square =Bodies.rectangle(300,100,50,50,square_options);
reta = Bodies.rectangle(200,200,80,50,reta_options)
  World.add(world,square)
  World.add(world,reta)
  var ball_options = {
    restitution : 0.5,
    frictionAir : 0.01,
    friction:0.02,

  }
 

  var ground_options = {
    isStatic : true
  }

  

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);

  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
 background ("green");
 Engine.update(engine);

 ellipse(ball.position.x,ball.position.y,20);
 rect(ground.position.x,ground.position.y,400,20);
  rect(square.position.x,square.position.y,50,50)
  rect(reta.position.x,reta.position.y,80,50)
}

