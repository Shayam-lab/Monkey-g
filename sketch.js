
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

var PLAY;
var END;
var gameState = PLAY;


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas(400,400);

monkey = createSprite(80,315,20,20);  
monkey.addAnimation("moving",monkey_running);  
monkey.scale=0.1;
  
ground = createSprite(400,350,900,20,10)  
ground.velocityX=-4;  
ground.x=ground.width/2;  
console.log(ground.x)  

bananaGroup= createGroup();  
obstacleGroup = createGroup();  
  
monkey.setCollider("rectangle",0,0,monkey.width,monkey.height);
monkey.debug= true;  
  
score = 0;  
  
}


function draw() {
text("Survival time:"+ score, 100, 50);
stroke("black")  
textSize(20);  
fill("black");  
Score = Math.ceil(frameCount/frameRate())  

if (gameState===PLAY){

if (keyDown("space")&& monkey.y >= 100) {
monkey.velocityY = -12;  
} 
  
monkey.velocityY = monkey.velocityY + 0.1;  
  
if (obstacleGroup.isTouching(monkey)){
//monkey.velocityY= -12;  
gameState = END;  
}  
  
  
  
  
  
  
  
  
  
}
  
  

  
drawSprites();  
}






