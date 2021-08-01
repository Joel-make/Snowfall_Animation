const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies; 
var bg, boy,boy_i;
var snowflakes=[]



function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  boy=createSprite(650, 200, 20, 20);
  boy.addImage(boy_i);
  boy.scale=0.6;
  text=createSprite(730, 120, 20, 20);
  text.addImage(text1);
  text.scale=0.3;
  text2=createSprite(230, 120, 20, 20);
  text2.addImage(text_2);
  text2.scale=0.3;
  text2.visible=false;
  text3=createSprite(730, 100, 20, 20);
  text3.addImage(text_3);
  text3.scale=0.3;
  text3.visible=false;

 
}
function preload()
{
  bg=loadImage("snow1.jpg");
  boy_i=loadImage("frosty1.png")
  boy_i2=loadImage("frosty1.gif")
  boy_i3=loadImage("frosty3.gif")
  text1=loadImage("text.png");
  text_2=loadImage("text2.png");
  text_3=loadImage("text3.png");

}

function draw() {
  background(bg); 
  Engine.update(engine);
  if(frameCount%30===0)
  {
    snowflakes.push(new Snowflakes(random(0,800),0))
  }
  
  if(keyCode===32)
  {
    boy.addImage(boy_i2);
    text.visible=false;
    boy.velocityX=-2;
  } 
  if(boy.x<600)
  {
    boy.addImage(boy_i3);
    text3.visible=false;
  }
  else if(boy.x>650){
    text3.visible=true;
    text3.velocityX=-2;
  }
  if(boy.x<550)
  {
    boy.addImage(boy_i2);
  }
  if(boy.x<500)
  {
    boy.addImage(boy_i3);
  }
  if(boy.x<450)
  {
    boy.addImage(boy_i2);
  }
  if(boy.x<400)
  {
    boy.addImage(boy_i3);
  }
  if(boy.x<350)
  {
    boy.addImage(boy_i2);
  }
  if(boy.x<300)
  {
    boy.addImage(boy_i3);
  }
  if(boy.x<250)
  {
    boy.addImage(boy_i2);
  }
  if(boy.x<200)
  {
    boy.addImage(boy_i3);
  }
  if(boy.x===150 && keyCode!==LEFT_ARROW)
  {
    boy.addImage(boy_i);
    text2.visible=true;
    boy.velocityX=0;
  }
  if(boy.x<100)
  {
    boy.addImage(boy_i2);
  }
  if(boy.x<50)
  {
    boy.addImage(boy_i3);
  }
  
  if(keyCode===LEFT_ARROW && boy.x===150)
  {
    boy.addImage(boy_i2);
    boy.x=145
    text2.visible=false;
    boy.velocityX=-2;
  }
  if(boy.x<0)
  {
    boy.x=810;
    text3.x=890;
  }
  for(var k = 0; k < snowflakes.length; k++)
  {
     snowflakes[k].display();
  
  }

  drawSprites();
}