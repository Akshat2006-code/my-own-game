
  const Engine = Matter.Engine;
  const World = Matter.World;
  const Bodies = Matter.Bodies;
  const Body = Matter.Body;
  const Constraint = Matter.Constraint;

var play;

function preload(){
playbutton=loadImage("Button.jpg");
face=loadImage("Face.png");
}

function setup() {
  createCanvas(1534,749);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  play=createSprite(800,320,30,30);
  play.addImage(playbutton);  
  play.scale=0.5; 
  
 
 // play2=createSprite(1300,600,30,30);
  //play2.addImage(playbutton);  
 // play2.scale=0.06;

  
  


  ball = new Ball(1300,-10, 40);
  ball2 = new Ball(1200,-10, 40);

  //slab = new Slab(600,300,300,20);
  slab2 = new Slab(10, 300, 20, 900);
  slab3 = new Slab(1000, 740, 2000, 20);
  slab4 = new Slab(1528, 250, 20, 1000);
  slab5 = new Slab(700, 10, 1700, 20);
  slab6 = new Slab(650, 600, 100, 50);
  slab7 = new Slab(600, 550, 100, 50);
  slab8 = new Slab(550, 500, 100, 50);
  slab9 = new Slab(500, 450, 100, 50);
  slab10 = new Slab(450, 400, 100, 50);
  slab11 = new Slab(400, 350, 100, 50);
  slab12 = new Slab(650, 678, 100, 102);
  slab13 = new Slab(339, 275, 20, 200);
  slab14 = new Slab(280, 365, 100, 20);
  slab15 = new Slab(240, 350, 20, 50);
  slab16 = new Slab(1200, 350, 20, 50);
  slab17 = new Slab(1300, 350, 50, 50);
  slab18 = new Slab(1400, 350, 20, 50);
  log1 = new Log(1300,-10,300, -PI/7);



}



function draw() {
  rectMode(CENTER);
  background("White");
  Engine.update(engine);



  ball.display();
  ball2.display();

  //slab.display();
  slab2.display();
  slab3.display();
  slab4.display();
  slab5.display();
  slab6.display();
  slab7.display();
  slab8.display();
  slab9.display();
  slab10.display();
  slab11.display();
  //slab12.display();
  slab13.display();
  slab14.display();
  slab15.display();
  slab16.display();
  slab17.display();
  slab18.display();
  log1.display();

  //slab19.display();
  //slab20.display();
  //slab21.display();
  //slab22.display();
  //slab23.display();
  //slab24.display();
  //slab25.display();
  //slab26.display();
  //slab27.display();
  //slab28.display();
  //slab29.display();
  //slab30.display();
  //slab31.display();
  //slab32.display();

  fill("Grey");
  textSize(25);
  text("Press Play Button To Play!", 620, 90);

  fill("Grey");
  textSize(15);
  text("THIS GAME IS STILL UNDER DEVELOPMENT!", 600, 120);

  fill("Blue");
  textSize(15);
  text("AIM: Get The Ball In The Box", 660, 140);

  fill("Blue");
  textSize(25);
  text("BY: Akshat Malik", 1200, 120);

  fill("Blue")
  textSize(40);
  text("👇", 260, 250)


  fill("Red");
  textSize(15);
  text("Use Arrow Keys To Play!", 670, 160);

  fill("Tan");
  textSize(35);
  text("WELCOME TO JUMP BOX! ", 550, 60);


  // if (mousePressedOver(play2)){
   // Matter.Body.setStatic(ball2.body,false);

  // }
   if (mousePressedOver(play)){
    Matter.Body.setStatic(ball.body,false);
    play.visible=false
    
   }
 


   

   

  



  drawSprites();
}


function keyPressed() {
  if (keyCode === UP_ARROW) { Matter.Body.applyForce(ball.body, ball.body.position, { x: 0, y:-25 });
text.hide() }
  if (keyCode === DOWN_ARROW) { Matter.Body.applyForce(ball.body, ball.body.position, { x: 0, y: 25 }); }
  if (keyCode === LEFT_ARROW) { Matter.Body.applyForce(ball.body, ball.body.position, { x: -25, y: 0 }); }
  if (keyCode === RIGHT_ARROW) { Matter.Body.applyForce(ball.body, ball.body.position, { x: 25, y: 0 }); }
  if (keyCode === ENTER) { Matter.Body.setPosition(ball.body,{x:1300,y:310});}
 
}














