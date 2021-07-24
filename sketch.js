
var snowflake,snowflakeImg
var bgImg

function preload() {
snowflakeImg = loadImage("snow 10.png");
  bgImg = loadImage("Piyush.png");
}
function setup() {
  createCanvas(800,400);
 
}

function draw() {
  background(bgImg);  
  drawSprites();
  createSnowflake();
}


  textSize(20);
  fill("black");
  text("SCORE :" + score, 650, 40);
  text("PRO-C33: SNOWFALL ANIMATION", 400, 380);


function createSnowflake(){
  if(frameCount%10===0){
  snowflake = createSprite(random(0,800), 0, 50, 50);
  snowflake.velocityX = -4;
  snowflake.velocityY = 6;
  snowflake.addImage(snowflakeImg);
  snowflake.scale = 0.1;
  }
}