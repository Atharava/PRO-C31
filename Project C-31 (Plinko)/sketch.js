const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var border1;

var balls = [];
var ballsChecked = [];
var divisions = [];
var circles1

var inter
var yourScore = 0

var divHeight = 300;

function preload(){
}

function setup() {
	createCanvas(480, 800);

	engine = Engine.create();
	world = engine.world;

	border1 = new Ground(240, 800, 480, 60);

	for(var i = 0; i <= 480; i = i + 80){
		var div;
		divisions.push(new division(i, 645, 10, divHeight));
		div = createSprite(i, 645, 10, divHeight);
	}

	circles1 = new Circles();

	spawnBalls()

	Engine.run(engine);
}

function draw() {
	rectMode(CENTER);
	background(0);
	findMousePos();
	
	fill(255, 255, 255);
	textSize(20)
	text("Score: "+yourScore, 15, 35)

	text("500", 20, 500);
	text("50", 110, 500);
	text("100", 185, 500);
	text("100", 265, 500);
	text("50", 350, 500);
	text("500", 425, 500);

	for(var j = 0; j < balls.length; j++){
		//balls[j].display()
		if(balls[j].body.position.y<550){
			balls[j].display()
		}else{
			if(balls[j].body.position.x<78){
				yourScore+=500
				ballsChecked.push(balls[j])
				balls.splice(j, 1)
			}else if(balls[j].body.position.x>78 && balls[j].body.position.x<160){
				yourScore+=50
				ballsChecked.push(balls[j])
				balls.splice(j, 1)
			}else if(balls[j].body.position.x>160 && balls[j].body.position.x<240){
				yourScore+=100
				ballsChecked.push(balls[j])
				balls.splice(j, 1)
			}else if(balls[j].body.position.x>240 && balls[j].body.position.x<320){
				yourScore+=100
				ballsChecked.push(balls[j])
				balls.splice(j, 1)
			}else if(balls[j].body.position.x>320 && balls[j].body.position.x<400){
				yourScore+=50
				ballsChecked.push(balls[j])
				balls.splice(j, 1)
			}else if(balls[j].body.position.x>400){
				yourScore+=500
				ballsChecked.push(balls[j])
				balls.splice(j, 1)
			}
			
		}
	}

	if(ballsChecked.length>0){
		for(x = 0; x<ballsChecked.length; x++){
			ballsChecked[x].display()
		}
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
function spawnBalls(){
	inter = setInterval(function () {
		balls.push(ball1 = new ball(random(480/2-10, 480/2+10), 10, 10));
	},500)
}
function setLineDash(list) {
  drawingContext.setLineDash(list);
}
function enableCords() {
	stroke(255);
	strokeWeight(4);
	setLineDash([0]);
	textSize(20);
	text(
		"x: " + round(mouseX) + ", y: " + round(mouseY),
		mouseX + 10,
		mouseY - 10
	);

	setLineDash([5, 10, 30, 10]);
	line(mouseX, 0, mouseX, height);
	line(0, mouseY, width, mouseY);
	stroke(0);
	strokeWeight(0);
	setLineDash([]);
}
