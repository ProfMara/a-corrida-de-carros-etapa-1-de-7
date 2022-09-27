var canvas;
var cenario, form;
var database, gameState;


function preload() {
  cenario = loadImage("./assets/planodefundo.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.start();
}

function draw() {
  background(cenario);

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
