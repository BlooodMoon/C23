const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var canvas, tower, ground, cannon, angle;

function preload (){
    towerImage = loadImage("tower.png");
    backgroundImage = loadImage("background.gif");
}
function setup(){
    canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    tower = new Tower(150,350,160,310);
    ground = new Ground (0,590,2400,20);
    angle = -PI/4;
    cannon = new Cannon(180,110,110,50,angle);
}

function draw(){
    background(189);
    image (backgroundImage, 0,0,width,height);
    Engine.update(engine);
   
    tower.display();
    ground.display();
    cannon.display();
}
