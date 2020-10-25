const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20)

    box1 = new Box(890,70,70,70);
    box2 = new Box(1070,70,70,70);
    PIG1 = new PIG(980,70);
    Log1 = new Log(980,20,280,PI/2);

    box3 = new Box(890,3,70,70);
    box4 = new Box(1070,3,70,70);
    PIG2 = new PIG(980,3);
    Log2 = new Log(980,-5,280,PI/2);

    box5 = new Box(950,-10,70,70);
    log3 = new Log(900,-10,100,PI/7)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    PIG1.display();
    PIG2.display();
    Log1.display();
    box3.display();
    box4.display();
    Log2.display();
    box5.display();
    log3.display();
}