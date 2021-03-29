var gamestate = "Start";
var score = 0;
var gold = 0, silver = 0, bronze = 0, gem = 0, wood = 300;
var Sp1 = 0, Sp2 = 0, Sp3 = 0, Sp4 = 0;
var coin1g, coin2g, coin3g, gemg, obstacleGroup;
var bg;
var Coin1, Coin2, Coin3, Diamond;
var Axe1, Axe2, Axe3, Axe4;
var Trophy;
var ground;
var ground2;
var obstacle, Tractor;
var spray;
var Coin1Img, Coin2Img, Coin3Img, DiamondImg;
var Axe1Img, Axe2Img, Axe3Img, Axe4Img;
var TrophyImg;
var ground2Img;
var TermiteImg, Termite2Img, Termite3Img, TractorImg;
var sprayImg;

function preload(){
  bg = loadImage("Images/bg.png");
  Coin1Img = loadImage("Images/GoldCoin.png");
  Coin2Img = loadImage("Images/SilverCoin.png");
  Coin3Img = loadImage("Images/BronzeCoin.png");
  DiamondImg = loadImage("Images/Diamond.png");
  Axe1Img = loadImage("Images/GoldAxe.png");
  Axe2Img = loadImage("Images/SilverAxe.png");
  Axe3Img = loadImage("Images/BronzeAxe.png");
  Axe4Img = loadImage("Images/DiamondAxe.png");
  TrophyImg = loadImage("Images/bg.png");
  ground2Img = loadImage("Images/bg.png");
  TermiteImg = loadImage("Images/Termite.png");
  Termite2Img = loadImage("Images/Termite 2.png");
  Termite3Img = loadImage("Images/Termite 3.png");
  TractorImg = loadImage("Images/Tractor.png");
  sprayImg = loadImage("Images/Spray.png");
}

function setup(){
  createCanvas(850,550);

  ground = createSprite(420,560,width*2,20);
  ground.visible=false;

  Tractor = createSprite(80,500,100,80);
  Tractor.addImage(TractorImg);
  Tractor.scale=0.45;
  Tractor.debug = false;
  Tractor.setCollider("rectangle",0,0,300,250);

  coin1g = new Group();
  coin2g = new Group();
  coin3g = new Group();
  gemg = new Group();
  obstacleGroup = new Group();

}

function draw(){

  background(bg);

  score=score+Math.round(getFrameRate()/60);

  textSize(24);
  strokeWeight(2);
  stroke(0);
  fill(0);
  text("Score : "+score,10,30);
  text("Wood : "+wood,10,60);

  fill("Gold");
  text("Gold : "+gold,200,30);
  text("Spray : "+Sp1,200,60);

  fill("Silver");
  text("Silver : "+silver,350,30);
  text("Spray : "+Sp2,350,60);

  fill("Brown");
  text("Bronze : "+bronze,500,30);
  text("Spray : "+Sp3,500,60);

  fill("Turquoise");
  text("Diamond : "+gem,650,30);
  text("Spray : "+Sp4,650,60);

  if(keyDown("space")){
    Tractor.velocityY = -20;
    }
    Tractor.velocityY = Tractor.velocityY + 2;
    Tractor.collide(ground);

  coin1();
  coin2();
  coin3();
  diamond();
  scoreInc();
  generateObstacles();
  Spray();
  scoreDec();

  drawSprites();

}

function coin1(){
  if(frameCount% 500 === 0){
  Coin1 = createSprite(850,random(19,500),20,20);
  Coin1.velocityX = -2;
  Coin1.addImage(Coin1Img);
  Coin1.lifetime=338;
  coin1g.add(Coin1);
  }
}

function coin2(){
  if(frameCount% 400 === 0){
  Coin2 = createSprite(850,random(19,500),20,20);
  Coin2.velocityX = -2;
  Coin2.addImage(Coin2Img);
  Coin2.lifetime=338;
  coin2g.add(Coin2);
  }
}

function coin3(){
  if(frameCount% 300 === 0){
  Coin3 = createSprite(850,random(19,500),20,20);
  Coin3.velocityX = -2;
  Coin3.addImage(Coin3Img);
  Coin3.lifetime=338;
  coin3g.add(Coin3);
  }
}

function diamond(){
  if(frameCount% 700 === 0){
  Diamond = createSprite(850,random(19,500),20,20);
  Diamond.velocityX = -2;
  Diamond.addImage(DiamondImg);
  Diamond.scale=0.4;
  Diamond.lifetime=330;
  gemg.add(Diamond);
  }
}

function generateObstacles(){
  if(frameCount%500==0){
 obstacle= createSprite(850,random(19,500),10,40);
  obstacle.velocityX=-2;
  obstacle.scale=0.1;
  obstacle.lifetime = 340;
    obstacleGroup.add(obstacle);
var rand = Math.round(random(1,3));
switch(rand)
  {
    case 1: obstacle.addImage(TermiteImg);
    break;
    case 2: obstacle.addImage(Termite2Img);
    break;
    case 3: obstacle.addImage(Termite3Img);
    break;
    default: break;
  }
}
}

function scoreInc(){
  if(Tractor.isTouching(coin1g)){
    gold=gold+1;
  }
  if(Tractor.isTouching(coin2g)){
    silver=silver+1;
  }
  if(Tractor.isTouching(coin3g)){
    bronze=bronze+1;
  }
  if(Tractor.isTouching(gemg)){
    gem=gem+1;
  }
}

function Spray(){
  if(gold>0 && keyDown("1")){
  spray = createSprite(150,obstacle.y,30,30);
  spray.addImage(sprayImg);
  spray.scale = 0.5;
  spray.lifetime = 20;
   Sp1=Sp1+1;
  }
  if(silver>0 && keyDown("2")){
  spray = createSprite(150,obstacle.y,30,30);
  spray.addImage(sprayImg);
  spray.scale = 0.5;
  spray.lifetime = 20;
   Sp2=Sp2+1;
  }
if(bronze>0 && keyDown("3")){
  spray = createSprite(150,obstacle.y,30,30);
  spray.addImage(sprayImg);
  spray.scale = 0.5;
  spray.lifetime = 20;
  Sp3=Sp3+1;
  }
  if(gem>0 && keyDown("4")){
  spray = createSprite(150,obstacle.y,30,30);
  spray.addImage(sprayImg);
  spray.scale = 0.5;
  spray.lifetime = 20;
  Sp4 = Sp4+1;
  }
}

function scoreDec(){
  if(Sp1/4===0){
    gold = gold-1;
  }
  if( Sp2/3===0){
    silver = silver-1;
  }
   if(Sp3/2===0){
    bronze = bronze-1;
  }
  if(Sp4/6===0){
    gem = gem-1;
  }
}