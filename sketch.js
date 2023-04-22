var spaceShip,spaceShip_Image;
var heart1,heart2,heart3,heart_image
var alien,ufoImage,ufoGroup;
var space,spaceImage;
var laser,laserGroup ;
var score;
var gameState;
var shoot = 1;
var hit = 0;
var over = 2
var heartCount = 3
var scoreText
var gameover_image,gameover
var heart_group

function preload(){
spaceShip_Image = loadImage ("spaceship (1).png");
ufoImage = loadImage ("ufo.png")
spaceImage = loadImage ("bg.png");
heart_image = loadImage("heart.png")
gameover_image = loadImage("gameover.png")
}

function setup() {
 createCanvas (1000,600);
  space = createSprite(589,321,100,100);
  space.addImage (spaceImage);
  space.velocityY = 4;
  space.scale = 5;
  
  spaceShip=createSprite (275,450,100,100);
  spaceShip.addImage (spaceShip_Image);
  spaceShip.scale = 0.25;
  ufoGroup = new Group ();
  laserGroup = new Group ();
  heart_group = new Group();

  gameover =createSprite (500,290,100,100);
  gameover.addImage(gameover_image) 
  gameover.scale = 0.0000000000000001 
  
  heart1 = createSprite (30,555,100,100);
  heart1.addImage(heart_image)
  heart1.scale = 0.1

  heart2 = createSprite (65,555,100,100);
  heart2.addImage(heart_image)
  heart2.scale = 0.1

  heart3 = createSprite (100,555,100,100);
  heart3.addImage(heart_image)
  heart3.scale = 0.1
  score = 0;
}

function draw() {
 background ("");
  spawnAliens();
  spawnhearts();
  console.log(mouseX,mouseY)
  console.log(heartCount)
  if (space.y >600){
  space.y = 300;    
  }
  if (heartCount==3){
    heart1.scale = 0.1
    heart2.scale = 0.1
    heart3.scale = 0.1
  }
  if (keyDown("right")&spaceShip.x<1000){
    spaceShip.x = spaceShip.x+10;
  }
  
  if (keyDown("left")&spaceShip.x>0){
    spaceShip.x = spaceShip.x+-10;
  }
  
  if (keyWentDown("space")){
    gameState=shoot;
   laser = createSprite(spaceShip.x,spaceShip.y,5,45);
   laser.velocityY = -15
    laser.shapeColor = "red"
    laserGroup.add (laser);
  }
  
  text ("SCORE :"+score,480,193);
  if (laserGroup.isTouching(ufoGroup)) {
    gameState=shoot
    score = score+5;
    ufoGroup.destroyEach();
    laserGroup.destroyEach();
  }
  if (ufoGroup.isTouching(spaceShip)&score>0){
    gameState=hit;
    score = score-5
    heartCount = heartCount-1
    ufoGroup .destroyEach();    
  }

 if (ufoGroup.isTouching(spaceShip)&& score==0){
  score =score
  ufoGroup .destroyEach(); 
  heartCount = heartCount-1
  gameState=hit;
 }

  if (score>100){
    alien.velocityY = 20
  }

  if (heartCount==2){
    heart3.scale = 0.000000001
  }

  if (heartCount==1){
    heart2.scale = 0.000000001
  }
  if (heartCount==0){
    space.velocityY = 0
    space.scale = 0.00000000000000000000001
    heart1.scale = 0.0000000000001
    laserGroup.destroyEach()
    ufoGroup.destroyEach()
    heart_group.destroyEach()
    text("Your Score is:"+score,)
    spaceShip.scale = 0.000001
    gameover.scale = 0.8

  }

  if (heart_group.isTouching(spaceShip)){
    heart_group .destroyEach(); 
    heartCount = 3
    
   }
 drawSprites (); 
  scoreText = text ("SCORE :"+score,900,193);
}

function spawnAliens(){
  var r = Math.round (random(0,997))
  if (frameCount%20===0){
  alien=createSprite (r,5,20,20);
    alien.scale = 0.2;
  alien.addImage (ufoImage);
  alien.velocityY = 7;
  ufoGroup.add (alien) ; 
  
  }
}

function spawnhearts(){
  var r = Math.round (random(0,997))
  if (heartCount<3){
  if (frameCount%200===0){
  heart=createSprite (r,5,20,20);
    heart.scale = 0.2;
  heart.addImage (heart_image);
  heart.velocityY = 7;
  heart_group.add (heart) ; 
  
  }}}