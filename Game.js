
class Game {

    //        FIELDS        \\ 
    gameMaze;
    monLoc;
    capLoc;
    playLoc;
    monster;
    captives;
    player;
    rooms; 
    flavorText;
    sounds;
    turn;
    
    // start and end courdinates, make sure to make a checker in the player turn method to ensure a win
    start;
    end;
    //maybe width and length fields
    //num of captives?
    //gameEnd and gameWon booleans and a checker?

    //        CONSTRUCTOR        \\ 
    constructor(){
        this.gameMaze = this.genMaze(20,20);
        this.monLoc = this.genMonLoc();
        this.capLoc = this.genCapLoc();
        this.playLoc = this.genPlayLoc();
        this.monster = new Monster([0,0]);
        //might have to put a this keyword on the object
        this.captives = this.genCaptiveArray
        this.player = new Player(.5, .5, .5);
        //the room map will be initilized by the genMaze() method
        this.flavorText = this.pullFlavorText
        this.sounds = null;
        this.turn = 0;
    }


    //        GENERATE METHODS        \\ 

    //Called in the constructor to procedurally generate the Maze to ensure that it will
    //be solvable by player 
    //returns a 2d Array of chars consisting of empty spaces, will also fill the room map
    //Maze sizes will always be the same, with just different layouts.
    genMaze(rows, cols){
        const maze = [];
        for (let i = 0; i < rows; i++) {
            maze.push(Array(cols).fill("█"));
        }

        function shuffle(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
            return array;
        }
        
        function backtrack(x, y) {
            maze[x][y] = " ";
            const neighbors = shuffle([
            [x - 2, y],
            [x, y - 2],
            [x + 2, y],
            [x, y + 2]
            ]);
            for (const [nx, ny] of neighbors) {
                if (nx < 0 || nx >= rows || ny < 0 || ny >= cols || maze[nx][ny] !== "█") {
                    continue;
                }
                maze[(x + nx) / 2][(y + ny) / 2] = " ";
                backtrack(nx, ny);
            }
        }

        function genRooms(maze){
            let size = maze.length
            for (let i = 0; i < size; i++) {
                for (let j = 0; j < size; j++) {
                }
              }
        }
       
        //runs two for loops through the rooms map and finds the two rooms that are furthest away from each other
        //These rooms will then be used as start and end of the maze.
        //
        function stenRooms(){
            idRoom1;
            idRoom2;
            farAway = 0;
            roomCoords = [];

            let size = maze.length
            for (let i = 0; i < size; i++) {
                for (let j = 0; j < size; j++) {
                    if(maze[i][j] == "□") {
                        //parse through the maze and add all room courdinates as an array 
                        //to the room coord array
                        tempArr = [i,j];
                        roomCoords.push(tempArr);
                    }
                }
              }

            for(let i = 0; i < roomCoords.length; i++){
                for(let j = 0; j < roomCoords.length; j++){
                    manDistance = Math.abs(roomCoords[j][0] - roomCoords[i][0]) + Math.abs(roomCoord[j][1] - roomCoord[i][1])
                    if( manDistance > farAway){
                        farAway = manDistance;
                        idRoom1 = roomCoords[i];
                        idRoom2 = roomCoords[j];
                    }
                }
            }

            this.start = idRoom1;
            this.end = idRoom2;
    

        }

        backtrack(Math.floor(Math.random() * rows), Math.floor(Math.random() * cols));
        genRooms(maze);
        return maze;

    }
        
    

    printMaze(matrix) {
        // for (let i = 0; i < maze.length; i++) {
        //     let row = "";
        //     for (let j = 0; j < maze[i].length; j++) {
        //         row += maze[i][j];
        //     }
        //     console.log(row);
        // }
        const formatted = matrix.map(row => row.join(" ")).join("\n");
        console.log(formatted);
    }

    //generates the location for the monster, keeps in mind the maze array to be placed in a empty space.
    //returns a 2d bool array with true being where the monster is
    genMonLoc(){

        return null;
    }

    //generates a 2d array of all captive locations.
    //returns a int array same size as maze,  with the value of the int being the amount of captives in that cell
    genCapLoc(){
        //generate the random num of captives in empty spaces across the maze.

        return null;
    }

    //generates a boolean array of the player location with true being where the player is.
    //randomly generates the player in a empty space somewhere near the edge of the board.
    genPlayLoc(){

        return null;
    }

    //makes a bunch of objects of type captive and puts them in a arraylist
    //returns arraylist of captive objects
    genCaptiveArray(){

        return null;
    }

    //pulls all the flavor text from a text file of our strings
    //returns a arrraylist of strings that is randomly chosen.
    //maybe we can make it situation specific but that would be hard.
    pullFlavorText(){

        return null;
    }


    //        CALLED METHODS        \\ 

    //called when the player presses a button
    //will call player action, monster action, captive action, discriptionbuilder method, and get action list
    //does not return anything
    takeTurn(playInput){

        this.turn+=1;
        this.printMaze(this.gameMaze)
        return null;
    }



//        Append the string to sounds        \\ 


    //when two captives meet, coin flip if they kill one of them or stick together
    //no limit on captive groups
    //return string of sound if captive gets killed, empty string if not
    cap2Enc(Cap1, Cap2){
        this.noise = ""
        this.captiveKilled = false;
        //do the coin flip then execute the if statement

        if(captiveKilled){
            noise += "You hear a scream as another captive loses their life, and the manaical laughing of a freshly made killer";
            //Make sure to decrease the captive counts for one of the objects and set to null if captive count hits 0;
            //create a body and call the update maze method
        }

        //make sure to lump the captive objects together into a group and erase of the objects in the arraylist.
        return noise;
    }

    //when a captive group/individual meet a monster 1 dies.
    //update the behavior of the rest of the captive group, somehow.
    //returns the noise of the monster killing a captive
    capMonEnc(cap,mon){
        this.noise = "You hear a scream and a roar as the Monster devours another victim.";
        //decrement the captive object and set it to null if the capcount = 0 
        //Maybe this has the monster occupied for a turn or two?
        //create a body and call the update maze method

        return noise;
    }
    
    //When a player comes across a captive they can reason with
    //or kill the captive to gain an item or have the captive join their party
    //does not return anything
    playCapEnc(cap){
        //two actions reason with, or attempt to kill.

        //if kill create a corpse that can be searched.
        //if reasoned do a dice roll to see if they will join your party that will buff you somehow.
        //if join than get rid of their captive object and update the player class.
        //setCaptiveInParty to increment
    }
    
    //when player and monster meet, access the player chance to survive.
    //can potentially end the game
    //return a string if the player survives/ player dies?
    playMonEnc(){
        //if player survives the monster runs off, call update monster location
        //if player dies update the gameEnd Boolean somehow
    }

    //takes in a array of x and y to specify which room is being searched
    //need to access the player room search chance
    //return items?
    roomSearch(courdinate){
        itemList = null;
        //access room search chance.
        //if room search chance passes, you need to generate the items in the room.

        return itemList;
    }

    //AI for the monster, find manhatten distance of all the prey, breadth first search to find a path.
    //update the monster array in the direction it chooses to go.
    //does not need to return anything
    monsterAction(){

    }

    //Need two behaviors, exploration and escape from monster
    //exploration go randomly to empty spaces, potentially backtrack based off of how smart we want it to be
    //exploration when they see movement they move towards it. 
    //During the escape it will be moving in the direction away from the monster maximize manhattan distance between it and the monster. 
    //run a for loop through the captive arraylist to make these decisions.
    captiveAction(){

    }

    // A bunch of If statements
    playerAction(playerInput){

        //match the string to all the possible actions in all the if statements and update / call other things accordingly.
    }

    //check the maze array around you, if statements and include player visibility value as conditionals to improve detail.
    //check if you see movement 
    //call flavor text every once in a while as you walk in empty spaces at random intervals. 
    //create a statement that lets you know that your flashlight decides to dim
    descriptionBuilder(){
        return "new text";
    }

    // Feeds into the frount end for player choice.
    //returns a list of strings that come from all available actions to the player including movement and actions. Max 9 actions in a turn .
    getActionList(){
        if(this.turn == 0){
            return ["pick up the revolver and open the door"];
        }
        return ["action1", "action2", "action3"];
    }



    //        UPDATE METHODS        \\ 

    //use to add corpses to the map as they appear or are created
    //does not return anything
    updateMaze(x,y){
        //access the maze object and update the tile with a corpse to be found by the player.

    }

    //used to move the monster around if they come into contact with the player and player survives.
    updateMonLoc(){
        //update the monster location board
    }

}