var box1,box3,box4,box5,box6,box7,box8,box9,box10,box11, box12, box13, box14
var ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;



function setup() {
  background("#000000")
  createCanvas(600,600);
  createSprite(400, 200, 50, 50);
  engine = Engine.create();
  world = engine.world;

wall = createSprite(300,470,600,200);
box1 = createSprite(500,400,100,300);
box3 = createSprite(400,380,75,320);
box4 = createSprite(325,300,75,400);
box5 = createSprite(250,330,70,370);
box10 = createSprite(175,250,75,370);
box6 = createSprite(460,250,20,70);
box7 = createSprite(485,250,20,70);
box8 = createSprite(510,250,20,70);
box9 = createSprite(540,250,20,70);
box11 = createSprite(75,380,100,300);
bridge = createSprite(300,335,600,75)
ground = createSprite(300,600,600,50);
box12 = createSprite(35,225,20,70);
box13 = createSprite(60,225,20,70);
box14 = createSprite(85,225,20,70);
box15 = createSprite(115,225,20,70)
bridge.shapeColor = "black"
}

function draw() {
  background(255,255,255); 
  Engine.update(engine); 
  
 
  
  
 box3.display();
 box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();
box10.display();
box12.display();
box13.display();
box14.display();
box15.display();
wall.display();

bridge.display();
box1.display();
box11.display();
ground.display();
  
  
  
  
}