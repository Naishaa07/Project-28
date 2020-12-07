const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot, boy1, boyImage;

function preload() {
   // backgroundImg = loadImage("sprites/bg.png");
   boyImage=loadImage("Plucking mangoes/boy.png")
}

function setup(){
    var canvas = createCanvas(1200,400);
    
    engine = Engine.create();
    world = engine.world;
    


    ground = new Ground(600,height,1200,20);
   // platform = new Ground(150, 305, 300, 170);

    tree1 = new Tree (700,320,300,300);
    //box2 = new Box(920,320,70,70);
    mango1 = new mango(810, 350,10);
    //log1 = new Log(810,260,300, PI/2);

    //box3 = new Box(700,240,70,70);
    //box4 = new Box(920,240,70,70);
    mango2 = new mango(810, 220,10);
    mango3 = new mango(810, 220,10);
    mango4 = new mango(810, 220,10);
    mango5 = new mango(810, 220,10);

    //log3 =  new Log(810,180,300, PI/2);

    //box5 = new Box(810,160,70,70);
    //log4 = new Log(760,120,150, PI/7);
    //log5 = new Log(870,120,150, -PI/7);

    stone1 = new Stone(100,100);

    //log6 = new Log(230,180,80, PI/2);
    boy1 = new boy(500,50, stone1.body,{x:200,y:100});
}

function draw(){
    background("white");
    boy1= createSprite(100,300,50,160)
    boy1.addImage(boyImage)
    drawSprites();

    Engine.update(engine);
    strokeWeight(4);
   // box1.display();
   // box2.display();
    ground.display();
    mango1.display();
    //log1.display();

    //box3.display();
    //box4.display();
    mango2.display();
    mango3.display();
    mango4.display();
    mango5.display();
    //log3.display();

    //box5.display();
    //log4.display();
    //log5.display();
      tree1.display();
    stone1.display();
    
    //platform.display();
    //log6.display();
    boy1.display();    
}
function mouseDragged(){
   Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    slingshot1.fly();
}