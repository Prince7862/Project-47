var gameState = 0;
var score = 0;
var font;
var run,run2
var runner1,runner2;
var player;
var virus1,virus2,virus3,virus4;
var virus1Img,virus2Img,virus3Img,virus4Img
var button,text,text1
var block1,block2,block3,block4,
block5,block6,block7,block8,block9,
block10,block11,block12,block13,block14,
block15,block16,block17,block18,block19,block20,
block21,block22,block23,block24,block25,block26,block27,block28,block29,block30,block31;
var canvas,virusGroup,blockGroup

function preload(){
font = loadFont("lailaland-font/Laillaland-BWG25.ttf");
runner1 = loadAnimation("Boyrun/run1.gif","Boyrun/run2.gif","Boyrun/run3.gif","Boyrun/run4.gif","Boyrun/run5.gif","Boyrun/run6.gif","Boyrun/run7.gif","Boyrun/run8.gif","Boyrun/run9.gif","Boyrun/run10.gif","Boyrun/run11.gif","Boyrun/run12.gif");
runner2 = loadAnimation("Girlrun/Grun1.gif","Girlrun/Grun2.gif","Girlrun/Grun3.gif","Girlrun/Grun4.gif","Girlrun/Grun5.gif","Girlrun/Grun6.gif","Girlrun/Grun7.gif","Girlrun/Grun8.gif","Girlrun/Grun9.gif","Girlrun/Grun10.gif","Girlrun/Grun11.gif","Girlrun/Grun12.gif","Girlrun/Grun13.gif","Girlrun/Grun14.gif","Girlrun/Grun15.gif");
virus1Img = loadImage("Images/virus1.png");
virus2Img = loadImage("Images/virus2.png");
virus3Img = loadImage("Images/virus3.png");
virus4Img = loadImage("Images/virus4.png");
backgroundImg = loadImage("Images/background.png");
}

function setup() {
 canvas = createCanvas(1200,800);
 virusGroup = new Group();
 blockGroup = new Group();
  /*background1 = createSprite(600,400,1200,800);
  background1.addImage(backgroundImg);
  background1.visible = false;*/
  text1 = createElement("h2");
  text1.html("Choose The Character You Want to Play As.")
  text1.position(600,400);
  text2 = createElement("h2");
  text2.html("Press START to Start Playing");
  text2.position(600,400);
  button = createButton("START");
  
  text1.hide();
  text2.hide();

 player = createSprite(700,400,0.1,0.1);
 player.frameDelay = 0.05;
 

run = createSprite(500,600,20,20);
  run.addAnimation("Animation 1",runner1);
  run.scale = 0.8;
  run.frameDelay = 0.5;

run2 = createSprite(900,600,20,20);
  run2.addAnimation("Animation 2",runner2);
run2.frameDelay = 0.5;

virus1 = createSprite(525,378,10,10)
  virus1.addImage(virus1Img);
  virus1.scale = 0.2
  virus2 = createSprite(575,378,10,10);
  virus2.addImage(virus2Img);
  virus2.scale = 0.2;
  virus3 = createSprite(625,370,10,10);
  virus3.addImage(virus3Img);
  virus3.scale = 0.3
  virus4 = createSprite(675,378,10,10);
  virus4.addImage(virus4Img);
  virus4.scale = 0.2
  block1 = createSprite(600,180,275,10)
  block1.shapeColor = rgb(0,0,153);
  block2 = createSprite(600,218,20,87);
  block2.shapeColor = rgb(0,0,153);
  block3 = createSprite(857,256,15,166);
  block3.shapeColor = rgb(0,0,153);
  block4 = createSprite(784,258,134,10);
  block4.shapeColor = rgb(0,0,153);
  block5 = createSprite(344,256,15,166);
  block5.shapeColor = rgb(0,0,153);
  block6 = createSprite(410,259,135,10);
  block6.shapeColor = rgb(0,0,153);
  block7 = createSprite(600,40,20,140);
  block7.shapeColor = rgb(0,0,153);
  block8 = createSprite(344,449,15,92);
  block8.shapeColor = rgb(0,0,153);
  block9 = createSprite(855,450,15,90);
  block9.shapeColor = rgb(0,0,153);
  block10 = createSprite(600,490,275,10);
  block10.shapeColor = rgb(0,0,153);
  block11 = createSprite(600,531,20,80);
  block11.shapeColor = rgb(0,0,153);
  block12 = createSprite(170,90,105,40);
  block12.shapeColor = rgb(0,0,153);
  block13 = createSprite(405,90,150,35);
  block13.shapeColor = rgb(0,0,153);
  block14 = createSprite(795,90,150,40);
  block14.shapeColor = rgb(0,0,153);
  block15 = createSprite(1025,90,105,40);
  block15.shapeColor = rgb(0,0,153);
  block16 = createSprite(170,180,100,10);
  block16.shapeColor = rgb(0,0,153);
  block17 = createSprite(1029,180,100,10);
  block17.shapeColor = rgb(0,0,153);
  block18 = createSprite(405,567,140,10);
  block18.shapeColor = rgb(0,0,153);
  block19 = createSprite(795,567,140,10);
  block19.shapeColor = rgb(0,0,153);
  block20 = createSprite(900,720,355,8);
  block20.shapeColor = rgb(0,0,153);
  block21 = createSprite(600,645,275,10);
  block21.shapeColor = rgb(0,0,153);
  block22 = createSprite(300,720,355,8);
  block22.shapeColor = rgb(0,0,153);
  block23 = createSprite(600,685,20,80);
  block23.shapeColor = rgb(0,0,153);
  block24 = createSprite(857,680,15,80);
  block24.shapeColor = rgb(0,0,153);
  block25 = createSprite(345,680,15,80);
  block25.shapeColor = rgb(0,0,153);
  block26 = createSprite(1150,645,85,10);
  block26.shapeColor = rgb(0,0,153);
  block27 = createSprite(55,645,85,10);
  block27.shapeColor = rgb(0,0,153);
  block28 = createSprite(215,607,15,80);
  block28.shapeColor = rgb(0,0,153);
  block29 = createSprite(170,567,100,10);
  block29.shapeColor = rgb(0,0,153);
  block30 = createSprite(985,607,15,80);
  block30.shapeColor = rgb(0,0,153);
  block31 = createSprite(1030,567,100,10);
  block31.shapeColor = rgb(0,0,153);

  virusGroup.add(virus1);
  virusGroup.add(virus2);
  virusGroup.add(virus3);
  virusGroup.add(virus4);
  virusGroup.setVisibleEach(false);

  blockGroup.add(block1);
  blockGroup.add(block2);
  blockGroup.add(block3);
  blockGroup.add(block4);
  blockGroup.add(block5);
  blockGroup.add(block6);
  blockGroup.add(block7);
  blockGroup.add(block8);
  blockGroup.add(block9);
  blockGroup.add(block10);
  blockGroup.add(block11);
  blockGroup.add(block12);
  blockGroup.add(block13);
  blockGroup.add(block14);
  blockGroup.add(block15);
  blockGroup.add(block16);
  blockGroup.add(block17);
  blockGroup.add(block18);
  blockGroup.add(block19);
  blockGroup.add(block20);
  blockGroup.add(block21);
  blockGroup.add(block22);
  blockGroup.add(block23);
  blockGroup.add(block24);
  blockGroup.add(block25);
  blockGroup.add(block26);
  blockGroup.add(block27);
  blockGroup.add(block28);
  blockGroup.add(block29);
  blockGroup.add(block30);
  blockGroup.add(block31);
  blockGroup.setVisibleEach(false);
}

function draw() {
  if(gameState == 0){
    virusGroup.setVisibleEach(false);
    blockGroup.setVisibleEach(false);
    
  
  background(0);
  textSize(28);
  fill("Red");
  textFont(font);
  //text("Choose The Character You Want to Play As.",displayWidth/2-170,displayHeight/2-80);

  if(mousePressedOver(run)){
    player.addAnimation("Animation 1",runner1);
    player.scale = 0.8;
    run.visible = false;
    run2.visible = false;
    text1.hide();
    text2.hide();
    button.position(660,600);
  }
  else if(mousePressedOver(run2)){
    player.addAnimation("Animation 2", runner2);
    player.frameDelay = 1;
    run.visible = false;
    run2.visible = false;
    text1.hide();
    text2.hide();
    button.position(700,600);
  }
button.mousePressed(function(){
  gameState = 1;
}
  );
}
  else if(gameState == 1){
    start();
    
  }
  drawSprites();
  fill("red");
  textSize(20);
  text(mouseX + " , " + mouseY, mouseX,mouseY);
}
function start(){
  textFont(font);
  background(backgroundImg);
  button.hide();
  player.scale = 0.2
  player.x = 65
  player.y = 65
  virusGroup.setVisibleEach(true);
  blockGroup.setVisibleEach(true);
}