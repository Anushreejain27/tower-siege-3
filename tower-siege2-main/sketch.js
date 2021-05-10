
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


function preload()
{
  getbackgroundI()
	
}

function setup() {
	createCanvas(1800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  stick1=new stick(700,550,400,20)
  stick2=new stick(1201,400,300,20)

  polygon1=new polygon(200,500,30)
  
  chain1=new chain(polygon1.body,{x:200,y:500})
  //the last layer of pink tower
b1=new block(550,500)
b2=new block(600,500)
b3=new block(650,500)
b4=new block(700,500)
b5=new block(750,500)
b6=new block(800,500)
b7=new block(850,500)
   //third layer of pink tower
   b8=new block(600,450)
   b9=new block(650,450)
   b10=new block(700,450)
   b11=new block(750,450)
   b12=new block(800,450)
  //second layer of pink tower
  b13=new block(650,400)
  b14=new block(700,400)
  b15=new block(750,400)
   //the top block
   b16=new block(700,350)



   //the last  layer of green tower
   b17=new block(1300,350)
   b18=new block(1250,350)
   b19=new block(1100,350)
   b20=new block(1150,350)
   bf=new block(1200,350)

    //the middle layer
   b22=new block(1149,300)
    b23=new block(1250,300)
    b24=new block(1200,300)

    //the top block
    b25=new block(1200,250)


   



	Engine.run(engine);
  
}








function draw() {
 // rectMode(CENTER);
  if (backgroundImg)
  background(backgroundImg);

  
push()
textSize(40)
fill("cyan")
stroke("white")
strokeWeight(3)
text("DRAG THE HEXAGONAL STONE AND RELEASE IT,TO LAUNCH IT TOWARDS THE BLOCKS",50,150)
pop()
push()
textSize(37)
fill("cyan")
stroke("white")
strokeWeight(3)
text("PRESS SPACE TO GET ANOTHER CHANCE",900,650)
pop()

 stick1.display()
 stick2.display()

 
 fill(255, 0, 110)
 b1.display()
 b2.display()
 b3.display()
 b4.display()
 b5.display()
 b6.display()
 b7.display()

 fill(255, 114, 182)
 
 b8.display()
 b9.display()
 b10.display()
 b11.display()
b12.display()
  fill(255, 161, 226)
  b15.display()
  b13.display()
  b14.display()
fill(255, 219, 235)
  b16.display()
  
  fill(48, 219, 51)
b17.display()
b18.display()
b19.display()
b20.display()
bf.display()

  fill(89, 325, 86)
  b22.display()
  b23.display()
  b25.display()
  

polygon1.display()
chain1.display()

fill(170, 255, 191)
b24.display()
  













  drawSprites();
 
}










function mouseDragged(){

  Matter.Body.setPosition(polygon1.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){

chain1.fly()

}
function keyPressed(){
if (keyCode===32){
  chain1.attach(polygon1.body)
}

}
async function getbackgroundI(){
console.log("background");
  var response= await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
var responseJSON = await response.json()
console.log(responseJSON)
var dateTime= responseJSON.datetime
var hour=dateTime.slice(11,13)
if(hour>=06&&hour<=19){
bg="bg.png"

}
else{
bg="bg2.jpg"

}
backgroundImg=loadImage(bg)
console.log (backgroundImg)
}

