
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var blower; 
var b1;
var b2;
var hook;
var bg_image;
var ball

function preload(){
var bg_image = ("bgi.jpg");
var b1 = ("building.1.png");
var b2 = ("building.2.jpg");
var blower = ("balloon.png");
var hook = ("hook 444.png");
}

function setup() {
  createCanvas(400,400);
  frameRate(80);

  engine = Engine.create();
  world = engine.world;
  

  blower = createsprite('baloon.png');
  blower.position(250,300);
  blower.size(100,100);
  blower.mouseClicked(airblow);

  b1 =  createsprite('building.1.png');
  b1.position(200,350);
  b1.size(100,100);

  b2 =  createsprite('building.2.jpg');
  b2.position(200,370);
  b2.size(100,100);

  hook = createImg('hook 444.png');
  hook.position(100,200);
  hook.size(50,50);
  

  ground = new Ground(250,height,width,20);

  ball = Bodies.circle(300,300,20);

  rope = new Rope(7,{x:100,y:90});

  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50);
}


function draw() 
{
  background(51);
  image(bg_img,0,0,width,height);
  Engine.update(engine);
  
  rope.show;

  drawSprites();

  if(collide(ball,b1)==true);
  {
    World.remove(engine.world,b1);
    b2 = null;
    
  }
  if(collide(ball,b2)==true);
  {
    World.remove(engine.world,b2);
   b2 = null;
   
}
}

function airblow(){
  Matter.Body.applyForce(fruit,{x:0,y:0},{x:0,y:-0.03});
  air.play();
}