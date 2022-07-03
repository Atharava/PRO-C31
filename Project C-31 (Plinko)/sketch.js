const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var border1;

var balls = [];
var divisions = [];
var circles1

var divHeight = 300;

function preload(){
}

function setup() {
	createCanvas(480, 800);

	engine = Engine.create();
	world = engine.world;

	border1 = new Ground(240, 800, 480, 60);

	circles1 = new Circles();

	Engine.run(engine);
}

function draw() {
	rectMode(CENTER);
	background(0);

	findMousePos();

	for(var i = 0; i <= 480; i = i + 80){
		var div;
		divisions.push(new division(i, 645, 10, divHeight));
		div = createSprite(i, 645, 10, divHeight);
	}

	if(frameCount%60===0){
		balls.push(ball1 = new ball(random(480/2-10, 480/2+10), 10, 10));
	}

	for(var j = 0; j < balls.length; j++){
		balls[j].display();
	}

	drawSprites();

	border1.display();
	circles1.display();
}

function findMousePos(){
	var argument;
	argument = 1;
	if(keyWentDown(32) && argument === 1){
		print("{"+"x: "+ mouseX + ", y: "+ mouseY+"}");
		argument = 0;
		argument = 1;
	}
}