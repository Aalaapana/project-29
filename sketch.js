const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2,box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15, box16;
//var backgroundImg,platform;
var hexagon, slingshot;
//var gameState = "onTheSling"

function preload() {
    //getBackgroundImg()
    
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    //platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    box3 = new Box(940,320,70,70);
    box4 = new Box(950,320,70,70);
    box5 = new Box(960,320,70,70);
    box6 = new Box(970,320,70,70);
    box6 = new Box(980,320,70,70);
    box7 = new Box(990,320,70,70);
    box8 = new Box(1000,320,70,70);
    box9 = new Box(1010,320,70,70);
    box10 = new Box(1020,320,70,70);
    box11 = new Box(1030,320,70,70);
    box12 = new Box(1040,320,70,70);
    box13 = new Box(1050,320,70,70);
    box14 = new Box(1060,320,70,70);
    box15 = new Box(1070,320,70,70);


    bird = new Bird(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:50});
    
}

function draw(){
    if(backgroundImg){
    background(backgroundImg);
    }
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    platform.display();
    //log6.display();
    slingshot.display();    
    
}

function mouseDragged(){
    if(gameState === "onTheSling"){
      Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
   }
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched"
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(bird.body);
        gameState = "onTheSling"
    }
}

async function getTime(){
    //http://worldtimeapi.org/api/timezone/Asia/Tokyo
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Tokyo")
    var responseJSON =  await response.json()
    console.log(responseJSON.datetime)
    console.log(responseJSON.datetime.slice(11,13))
}

async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Tokyo")
    var responseJSON =  await response.json()  
    
    
    var hrs = responseJSON.datetime.slice(11,13)
    
    if(hrs >= 06 && hrs <=19){
        bg = 'sprites/bg.png'
    }
    else{
        bg = 'sprites/bg2.jpg'
    }
    backgroundImg = loadImage(bg);

}

