
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint
var world,engine
var roof
function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	roof= new Roof()
	bob1= new Bob(150,600)
	bob2= new Bob(200,600)
	bob3= new Bob(250,600)
	bob4= new Bob(300,600)
	bob5= new Bob(350,600)
	//bob6= new Bob(350,400)
	//bob5= new Bob(100,400)
	rope1= new Rope(bob1.body,roof.body,-115)
	rope2= new Rope(bob2.body,roof.body,-60)
	rope3= new Rope(bob3.body,roof.body,0)
	rope4= new Rope(bob4.body,roof.body,60)
	rope5= new Rope(bob5.body,roof.body,115)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("tan");
  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()
 
  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()
  roof.display()
 
}

function keyPressed()
{
	if(keyCode===UP_ARROW)
	{
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-50})
	}
}


