
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var wall1,wall2,wall3;

var ballObject;

function setup() {
	createCanvas(1600, 700);
	
	engine = Engine.create();
	world = engine.world;
	wall1=new Dustbin(1200,500);
	wall2=new Dusstbin(1205,650)
  
	ground = new Ground(width/2,670,width,20);
	
	ballObject = new Paper (200,450,80);
	

	
		Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  Engine.update(engine);
  if(ballObject.isTouching(wall2)){
	ballObject.destroyEach();
  }
 ground.display();
 wall2.display();
wall1.display();


  ballObject.display();
  
  
 
 
  
 
}

function keyPressed(){
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ballObject.body,ballObject.body.position,{x:380,y:-380});
	}
}

	




