const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var rubberball;
var stone;
var iron;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(700,400);
    rubberball = new Rubber(500, 200, 40);
    stone = new Stone(200,300);
    iron = new Iron(200,100);


}

function draw(){
    background("lightBlue");
    Engine.update(engine);

    //Matter.body.setStatic(rubberball, false);

    plane.display();
    hammer.display();
    rubberball.display();
    stone.display();
    iron.display();
}
