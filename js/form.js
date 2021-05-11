class Form {
    constructor() {     //properties --> input, button and greeting
        this.input = createInput('Name');
        this.button = createButton('Play');
        this.greeting = createElement('h2');
    }

    hide() {             //hide the input, button & greeting
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }

    //display the form to the player
    display() {
        var title = createElement('h1');
        title.html("Car Racing Game");
        title.position(100, 0);

        this.input.position(140, 160)

        this.button.position(200, 250);

        //to click on the Play button and execute a set of commands --> variableName.mousePressed()
        this.button.mousePressed(() => {
            //hide the input & button --> variableName.hide()
            this.input.hide();
            this.button.hide();

            //create a variable called 'name' to store the input of the user --> variableName.value()
            player.name = this.input.value();

            //increase the playerCount by 1
            playerCount += 1;

            //update the player's name in the db
            player.update(player.name);

            //update the playerCount in the db
            player.updateCount(playerCount);

            //greet the player with "Hello" and the player's name
            this.greeting.html("Hello " + player.name);
            this.greeting.position(200, 160);
        })
    }
}