 var ball;


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(2000, 2000);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	


	Engine.run(engine);

var ball_options={
	isStatic:false,
	restitution:0,
	friction:0,
	density:1.2
}
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  groundobj.display();
  drawSprites();
 
}

function hforce() {
	Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0})
	
  }
  function vforce() {
	Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05})
	
  }

