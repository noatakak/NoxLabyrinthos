import { Captive } from './Captive.js';
import { Monster } from './Monster.js';
import { Player } from './Player.js';

// export class Game{
//     constructor(){
//         this.cap = new Captive();
//         this.mon = new Monster();
//         this.play = new Player();
//     }
// }

export class Game {

    //        FIELDS        \\ 
    maze;
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
    //maybe width and length fields
    //num of captives?
    //gameEnd and gameWon booleans and a checker?

    //        CONSTRUCTOR        \\ 
    constructor(){
        this.maze = this.genMaze();
        this.monLoc = this.genMonLoc();
        this.capLoc = this.genCapLoc();
        this.playLoc = this.genPlayLoc();
        this.monster = new Monster([0,0]);
        //might have to put a this keyword on the object
        this.captives = this.genCaptiveArray
        this.player = new Player(.5, .5, .5);
        //the room map will be initilized by the genMaze() method
        this.flavorText = this.pullFlavorText
        sounds = null;
        this.turn = 0;
    }


    //        GENERATE METHODS        \\ 

    //Called in the constructor to procedurally generate the Maze to ensure that it will
    //be solvable by player 
    //returns a 2d Array of chars consisting of empty spaces, will also fill the room map
    //Maze sizes will always be the same, with just different layouts.
    genMaze(){
        //Generate maze somehow
        const maze = [];
        rows = 10;
        cols = 10;

        // Initialize maze with all walls
        for (let row = 0; row < rows; row++) {
          maze.push(new Array(cols).fill("w"));
        }
      
        // Set starting position randomly within perimeter
        let startRow = 2 * Math.floor(Math.random() * (rows - 2)) + 1;
        let startCol = 2 * Math.floor(Math.random() * (cols - 2)) + 1;
        maze[startRow][startCol] = "s";
      
        // Run recursive backtracker algorithm to carve out maze
        const visited = new Set();
        recursiveBacktracker(startRow, startCol, maze, visited);
      
        // Convert maze to string representation
        const mazeString = maze.map(row => row.join("")).join("\n");
        return mazeString;
        //cycle through maze and assign room cells to the rooms map
        return maze;
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
        return null;
    }



//        Append the string to sounds        \\ 


    //when two captives meet, coin flip if they kill one of them or stick together
    //no limit on captive groups
    //return string of sound if captive gets killed, empty string if not
    cap2Enc(Cap1, Cap2){
        noise = ""
        captiveKilled = false;
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
        noise = "You hear a scream and a roar as the Monster devours another victim.";
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