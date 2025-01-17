var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var supply,supplyImage;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
	supplyImage = loadImage("Supply-Copy.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	supply = createSprite(400,350,800,700)
	supply.addImage(supplyImage)


	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-135, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 550, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  //packageSprite.x = helicopterSprite.x

   keyPressed()

   if(packageBody.y < 300){
	packageSprite.x = helicopterSprite.x


   }
  


//Engine.update(engine)
  if(helicopterSprite.x === helicopterSprite.x + 1 && packageBody.position.y > 10){

	packageSprite.x = packageSprite.x + 1

   }
  drawSprites();
 
}

function keyPressed() {
//if(keyDown("Right")){
//	helicopterSprite.x = helicopterSprite.x + 10
		//packageBody.position.x  = packageBody.position.x  - 10

//}

//if(keyDown("Left")){
//	helicopterSprite.x = helicopterSprite.x - 10
	//packageBody.position.x  = packageBody.position.x  - 10
	
//}
   if(keyDown("ENTER")){

	supply.visible = false

   }
	

if(keyDown("SPACE")){

	Body.setStatic(packageBody, false);

}
  }




