/*
    1. read the gameState --> readState()
    2. update the gameState --> update(state)
    3. wait state --> wait()
*/

class Game {
    constructor() {
        
    }

    readState() {
        var gameStateRef = database.ref('gameState');

        gameStateRef.on("value", function(data) {
            gameState = data.val();
        });
    }

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }

    async wait() {
        //if the gameState is 0, 
        if (gameState === 0) {
            //new player object is created from the playerClass
                //objectName = new ClassName()
            player = new Player();

            //create a var and ref to the db for a temporary listener and store it inside the playerCount variable
            var playerCountRef = await database.ref('playerCount').once("value");

                if (playerCountRef.exists()) {
                    playerCount = playerCountRef.val();

                //playerCount is read
                player.readCount();
                }
                      
            //a new form object is created for the Form class
            form = new Form();
            
            //form is displayed
            form.display();
        }
        
    }

    play() {         //after the 4th player logs in
        //hide the form
        form.hide();

        //display the text 'Game Starts'
        textSize(30);
        text("Starting Game...", 120, 100);

        //to get the function that reads the information of the player
        Player.getPlayerInfo();

        //to take the defined values (values in the database)    correct - not wrong   defined = not undefined
        if (allPlayers !== undefined) {
            var displayPosition = 130;

            for(var i in allPlayers){           //i --> every single player in allPlayers
                if (i === "player" + player.index) { //if 1st player to login is player1, if 2nd player to login is player2
                    fill("red")
                }
                else {
                    fill("black")
                }
            
                displayPosition += 20;

                //display the info of the player one by one
                //text(player.name + ": " + player.distance, x ,y  )  replace 'player' with allPlayers[i]
                text(allPlayers[i].name + ": " + allPlayers[i].distance, 120, displayPosition);
            }
        }
    }
}