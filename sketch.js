var database;
var gameState = 0;
var playerCount;
var game;               //OBJECT OF THE Game CLASS
var player;             //OBJECT OF THE Player CLASS
var form;               //OBJECT OF THE Form CLASS
var canvas;
var allPlayers;


function setup() {
  canvas = createCanvas(400, 400);

  //create database inside 'database' variable --> firebase.database()
  database = firebase.database();

  //a new game object is created for the Game clas
  game = new Game();

  //read the gameState
  game.readState();

  //call the wait state of the game
  game.wait();
}

function draw() {
  background();

  //when the playerCount is 4, the gameState is updated to 1 in the database
  if (playerCount === 4) {
    game.update(1);
  }

  //to empty the screen and call the play function when the gameState is 1
  if (gameState === 1) {
    clear();
    game.play();
  }
}