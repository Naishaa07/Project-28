const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot, boy1, boyImage;

function preload() {
  
   //boyImage=loadImage("Plucking mangoes/boy.png")
}

function setup(){
    var canvas = createCanvas(1200,400);
    
    engine = Engine.create();
    world = engine.world;
    


    ground = new Ground(600,height,1200,20);
    tree1 = new Tree (700,320,300,300);
    mango1 = new mango(810, 350,10);
    mango2 = new mango(810, 220,10);
    mango3 = new mango(810, 220,10);
    mango4 = new mango(810, 220,10);
    mango5 = new mango(810, 220,10);

    
    stone1 = new Stone(100,100);

   
    boy1 = new boy(500,50, stone1.body,{x:200,y:100});
}

function draw(){
    background("white");
    //boy1= createSprite(100,300,50,160)
    //boy1.addImage(boyImage)
    //drawSprites();

    Engine.update(engine);
    strokeWeight(4);
  
    ground.display();
    mango1.display();
    
    mango2.display();
    mango3.display();
    mango4.display();
    mango5.display()
      tree1.display();
    stone1.display()
    boy1.display();    
}
function mouseDragged(){
   Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    slingshot1.fly();
}
