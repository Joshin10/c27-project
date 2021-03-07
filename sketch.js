
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 bob1=new bob(300,400,40,40)
 bob2=new bob(350,400,40,40)
 bob3=new bob(400,400,40,40)
 bob4=new bob(450,400,40,40)
 bob5=new bob(500,400,40,40)

 ground=new ground(200,600,300,10)
 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



