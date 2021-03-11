const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
var engine,world
function setup(){
createCanvas(450,700)
   engine = Engine.create();
world = engine.world
ball = new Ball(405,550)
rectangleObject = new RectangleObject(380,370,20,520)
rectangleObject1 = new RectangleObject(0,370,50,1000)
rectangleObject2 = new RectangleObject(450,370,50,1000)
rectangleObject3 = new RectangleObject(395,650,60,140)
rectangleObject4 = new RectangleObject(225,20,450,100)
}

function draw(){
    background("black")
    Engine.update(engine)
    ball.display()
    rectangleObject.display()
    rectangleObject1.display()
    rectangleObject2.display()
    rectangleObject3.display()
    rectangleObject4.display()
}