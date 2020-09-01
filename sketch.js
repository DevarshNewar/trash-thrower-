
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1366, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = Bodies.rectangle(width/2, 350, width, 10 , {isStatic:true} );
 	World.add(world, ground);

    boxrightside = new Dustbin(1300,300,50,150);
	boxrightside.shapeColor = "red";
	boxleftside = new Dustbin(1100,300,50,150);
	boxleftside.shapeColor = "red";
	boxflat = new Dustbin(1200,350,150,50);
	boxflat.shapeColor = "red";
	
	paperball = new Papers(50,50);
	Engine.run(engine);
   }


function draw() {
  rectMode(CENTER);
  background(0);
  drawSprites();

  boxrightside.display();
  boxleftside.display();
  boxflat.display();

  paperball.display();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paperball.body,paperball.body.position,{x:90,y:-90})
	}
}

