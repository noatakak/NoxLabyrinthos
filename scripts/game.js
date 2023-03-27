class game {

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
    //maybe width and length fields
    //num of captives?

    //        CONSTRUCTOR        \\ 
    constructor(){
        this.maze = this.genMaze();
        this.monLoc = this.genMonLoc();
        this.capLoc = this.genCapLoc();
        this.playLoc = this.genPlayLoc();
        this.monster = new monster();
        //might have to put a this keyword on the object
        this.captives = this.genCaptiveArray
        this.player = new player();
        //the room map will be initilized by the genMaze() method
        this.flavorText = this.pullFlavorText
    }


    //        GENERATE METHODS        \\ 

    //Called in the constructor to procedurally generate the Maze to ensure that it will
    //be solvable by player 
    //returns a 2d Array of chars consisting of empty spaces, will also fill the room map
    //Maze sizes will always be the same, with just different layouts.
    genMaze(){
        Maze = null
        //Generate maze somehow
        
        rooms = null;
        //cycle through maze and assign room cells to the rooms map
        return Maze;
    }

    //generates the location for the monster, keeps in mind the maze array to be placed in a empty space.
    //returns a 2d bool array with true being where the monster is
    genMonLoc(){
        MonLoc = null;

        return MonLoc;
    }

    //generates a 2d array of all captive locations.
    //returns a int array same size as maze,  with the value of the int being the amount of captives in that cell
    genCapLoc(){
        CapLoc = null;
        //generate the random num of captives in empty spaces across the maze.

        return CapLoc;
    }

    //generates a boolean array of the player location with true being where the player is.
    //randomly generates the player in a empty space somewhere near the edge of the board.
    genPlayLoc(){
        PlayLoc = null;

        return PlayLoc;
    }

    //makes a bunch of objects of type captive and puts them in a arraylist
    //returns arraylist of captive objects
    genCaptiveArray(){
        capArray = null;

        return capArray;
    }

    //pulls all the flavor text from a text file of our strings
    //returns a arrraylist of strings that is randomly chosen.
    //maybe we can make it situation specific but that would be hard.
    pullFlavorText(){
        flavorArray = null;

        return flavorArray;
    }


    //        CALLED METHODS        \\ 

    //called when the player presses a button
    //will call player action, monster action, captive action, discriptionbuilder method, and get action list
    //does not return anything
    takeTurn(playInput){


    }

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
    //
    playMonEnc(){
        //if player survives the monster runs off
    }

    //use to add corpses to the map as they appear or are created
    //does not return anything
    updateMaze(x,y){
        //access the maze object and update the tile with a corpse to be found by the player.

    }

    updateMonLoc(){

    }




}