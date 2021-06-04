var bg;
var sleep;
var brush;
var gym;
var eat;
var drink;
var move;

function preload() {
  bg = loadImage("images/iss.png");
  sleep = loadAnimation("images/sleep.png");
  brush = loadAnimation("images/brush.png");
  gym = loadAnimation("images/gym1.png", "images/gym2.png");
  eat = loadAnimation("images/eat1.png", "images/eat2.png");
  drink = loadAnimation("images/drink1.png", "images/drink2.png");
  move = loadAnimation("images/move.png", "images/move1.png");
  bath = loadAnimation("images/bath1.png", "images/bath2.png");
}

function setup() {
  createCanvas(400, 400);
  astronaut = createSprite(300, 230);
  astronaut.addAnimation("sleeping", sleep);
  astronaut.scale = 0.1;
}

function draw() {
  background(bg);

  edges = createEdgeSprites();

  if (keyDown(UP_ARROW)) {
    astronaut.addAnimation("brushing", brush);
    astronaut.changeAnimation("brushing");
    astronaut.y = 250;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if (keyDown(DOWN_ARROW)) {
    astronaut.addAnimation("gymming", gym);
    astronaut.changeAnimation("gymming");
    astronaut.y = 200;
    astronaut.x = 200;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  if (keyDown(LEFT_ARROW)) {
    astronaut.addAnimation("eating", eat);
    astronaut.changeAnimation("eating");
    astronaut.y = 300;
    astronaut.x = 100;
    astronaut.velocityX = 2;
    astronaut.velocityY = -2;
  }
  astronaut.bounceOff(edges);

  if (keyDown(RIGHT_ARROW)) {
    astronaut.addAnimation("bathing", bath);
    astronaut.changeAnimation("bathing");
    astronaut.y = 200;
    astronaut.x = 200;
  }

  if (keyDown("M")) {
    astronaut.addAnimation("moving", move);
    astronaut.changeAnimation("moving");
    astronaut.y = 300;
    astronaut.x = 100;
    astronaut.velocityX = 2;
    astronaut.velocityY = -2;
  }

  if (keyDown("S")) {
    astronaut.addAnimation("sleeping", sleep);
    astronaut.changeAnimation("sleeping");
    astronaut.x = 300;
    astronaut.y = 230;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  drawSprites();

  fill("red");
  text("Use Arrows and m button to see daily routine", 100, 20);
}
