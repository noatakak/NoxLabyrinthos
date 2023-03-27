class game {
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


    constructor(){
        maze = genMaze();
        monLoc = genMonLoc();
        capLoc = genCapLoc();
        playLoc = genPlayLoc();
    }


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

    //
    genPlayLoc(){
        PlayLoc = null;
        //

        return PlayLoc;
    }

    //called when the player presses a button
    //will call player action, monster action, captive action, discriptionbuilder method, and get action list
    //does not return anything
    takeTurn(playInput){


    }

}