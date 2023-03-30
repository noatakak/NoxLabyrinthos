class Game {

    //        FIELDS        \\ 
    gameMaze;
    monLoc;
    capLoc;
    playerLoc;
    monster;
    captives;
    player;
    rooms; 
    flavorText;
    sounds;
    turn;
    roomMap;
    lastMove;
    // start and end courdinates, make sure to make a checker in the player turn method to ensure a win
    start;
    end;
    //maybe width and length fields
    //num of captives?
    //gameEnd and gameWon booleans and a checker?

    //        CONSTRUCTOR        \\ 
    constructor(){
        this.gameMaze = this.genMaze(15,15);
        this.roomMap = this.genRooms(this.gameMaze);
        this.roomMap.set(this.start, "empty");
        this.roomMap.set(this.end, "empty");
        this.monLoc = this.genMonLoc();
        this.capLoc = this.genCapLoc();
        this.playerLoc = this.start;
        this.monster = new Monster([0,0]);
        //might have to put a this keyword on the object
        this.captives = this.genCaptiveArray
        this.player = new Player(.5, .5, .5);
        this.flavorText = this.pullFlavorText
        this.sounds = [];
        this.turn = 0;
        this.printMaze(this.gameMaze);
        this.printMaze(this.gameMaze);
        this.lastMove = null;
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

        backtrack(Math.floor(Math.random() * rows), Math.floor(Math.random() * cols));
        return maze;

    }

    genItem(){
        let itemList = ["bullet", "flashlight", "battery", "shiv", "machete", "body armor", "flash mine", "motion tracker"];
        const randomIndex = Math.floor(Math.random() * itemList.length);
        return itemList[randomIndex];
    }

    genRooms(maze){
        //runs two for loops through the rooms map and finds the two rooms that are furthest away from each other
        //These rooms will then be used as start and end of the maze.
        //
        function stenRooms(){
            let idRoom1;
            let idRoom2;
            let farAway = 0;
            let roomCoords = [];

            let size = maze.length
            for (let i = 0; i < size; i++) {
                for (let j = 0; j < size; j++) {
                    if(maze[i][j] == "□") {
                        //parse through the maze and add all room courdinates as an array 
                        //to the room coord array
                        let tempArr = [i,j];
                        roomCoords.push(tempArr);
                    }
                }
              }

            for(let i = 0; i < roomCoords.length; i++){
                for(let j = 0; j < roomCoords.length; j++){
                    let manDistance = Math.abs(roomCoords[j][0] - roomCoords[i][0]) + Math.abs(roomCoords[j][1] - roomCoords[i][1])
                    if(manDistance > farAway){
                        farAway = manDistance;
                        idRoom1 = roomCoords[i];
                        idRoom2 = roomCoords[j];
                    }
                }
            }

            return [idRoom1, idRoom2];
        }
        let roomMap = new Map();
        let size = maze.length
        for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j++) {
                let isRoom = false;
                let topNeighbor = maze[i][j] == " " && i > 0 && maze[i-1][j] == "█";
                let bottomNeighbor = maze[i][j] == " " && i < size-1 && maze[i+1][j] == "█";
                let leftNeighbor = maze[i][j] == " " && j > 0 && maze[i][j-1] == "█";
                let rightNeighbor = maze[i][j] == " " && j < size-1 && maze[i][j+1] == "█";
                if(topNeighbor && bottomNeighbor && leftNeighbor && !rightNeighbor){
                    isRoom = true;
                }else if(topNeighbor && bottomNeighbor && !leftNeighbor && rightNeighbor){
                    isRoom = true;
                }else if(topNeighbor && !bottomNeighbor && leftNeighbor && rightNeighbor){
                    isRoom = true;
                }else if(!topNeighbor && bottomNeighbor && leftNeighbor && rightNeighbor){
                    isRoom = true;
                }
                if(isRoom){
                    maze[i][j] = "□";
                    roomMap.set([i,j], this.genItem());
                }
            }
        }
        let stend = stenRooms();
        this.start = stend[0];
        this.end = stend[1];
        return roomMap
    }
   
    printMaze(matrix) {
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

    // called when the player chooses to search their current room
    searchRoom(){
        let searchDescription = this.player.addItem(this.roomMap.get(this.playerLoc));

        this.roomMap.set(this.playerLoc, "empty");

        //TODO make search description
        return searchDescription;
    }

    //called when the player wants to leave their current room
    leaveRoom(){
        let size = this.gameMaze.length;
        let topNeighbor = this.start[0] > 0 && this.gameMaze[this.start[0]-1][this.start[1]] == " ";
        let bottomNeighbor = this.start[0] < size-1 && this.gameMaze[this.start[0]+1][this.start[1]] == " ";
        let leftNeighbor = this.start[1] > 0 && this.gameMaze[this.start[0]][this.start[1]-1] == " ";
        let rightNeighbor =  this.start[1] < size-1 && this.gameMaze[this.start[0]][this.start[1]+1] == " ";
        if(topNeighbor){
            this.playerLoc = [this.playerLoc[0]-1, this.playerLoc[1]]
            this.player.compass.setCompass("NORTH");
        }else if(bottomNeighbor){
            this.playerLoc = [this.playerLoc[0]+1, this.playerLoc[1]]
            this.player.compass.setCompass("SOUTH");
        }else if(leftNeighbor){
            this.playerLoc = [this.playerLoc[0], this.playerLoc[1]-1]
            this.player.compass.setCompass("WEST");
        }else if(rightNeighbor){
            this.playerLoc = [this.playerLoc[0], this.playerLoc[1]+1]
            this.player.compass.setCompass("EAST");
        }
    }

    //called when a player shoots their revolver
    gunshot(direction){
        let compassDir = "";
        for(let i = 0; i < this.compass.currentDirection.length; i++){
            let node = this.compass.currentDirection.head;
            if(i == direction){
                compassDir = node.data;
                break;
            }
            node = node.next;
        }

    }

    //called when a player places a mine
    placeMine(){
        this.gameMaze[this.playerLoc[0]][this.player[1]] = "m";
        this.player.flashMineCount-=1;
        return "you place a mine at your current location."
    }

    //called when the player presses a button
    //will call player action, monster action, captive action, discriptionbuilder method, and get action list
    //does not return anything
    takeTurn(playInput){
        if(this.turn == 0){
            this.leaveRoom();
        }else{
            if(playInput == "continue forward down the hall"){
                // forward hall
                this.playerLoc = this.player.move(0, this.playerLoc);
                this.sounds.push("you walk down the hallway in front of you.");
            
            }else if(playInput == "turn back and go down the hall"){ 
                // backward hall
                this.playerLoc = this.player.move(2, this.playerLoc);
                this.sounds.push("you walk down the hallway behind you.");

            }else if(playInput == "turn left and go down the hall"){ 
                // left hall
                this.playerLoc = this.player.move(3, this.playerLoc);
                this.sounds.push("you walk down the hallway to your left.");

            }else if(playInput == "turn right and go down the hall"){ 
                // right hall
                this.playerLoc = this.player.move(1, this.playerLoc);
                this.sounds.push("you walk down the hallway to your right");

            }else if(playInput == "continue forward and enter the room"){ 
                // forward room
                this.playerLoc = this.player.move(0, this.playerLoc);
                this.sounds.push("you enter the room in front of you.")

            }else if(playInput == "turn back and enter the room"){ 
                // back room
                this.playerLoc = this.player.move(2, this.playerLoc);

            }else if(playInput == "turn left and enter the room"){ 
                // left room
                this.playerLoc = this.player.move(3, this.playerLoc);

            }else if(playInput == "turn right and enter the room"){ 
                // back room
                this.playerLoc = this.player.move(1, this.playerLoc);

            }else if(playInput == "search the room"){
                // search room
                this.sounds.push(this.searchRoom());
            }else if(playInput = "leave the room"){
                // leave room
                this.leaveRoom();
            }else if(playInput == "look forward and fire your revolver"){ 
                // shoot forward
                this.gunshot("FORWARD");
            }else if(playInput == "turn back and fire your revovler"){ 
                // shoot backward
                this.gunshot("BACKWARD");
            }else if(playInput == "turn left and fire your revovler"){ 
                // shoot left
                this.gunshot("LEFT")
            }else if(playInput == "turn right and fire your revolver"){ 
                // shoot right
                this.gunshot("RIGHT");
            }else if(playInput = "place a flash mine on the ground"){
                // place flash mine
                this.sounds.push(this.placeMine());
            }
        }
        this.lastMove = playInput;
        this.monsterAction();
        this.captiveAction();
        //make encounter check
        this.turn+=1;
        return null;
    }



//        push the string to sounds        \\ 


    //when two captives meet, coin flip if they kill one of them or stick together
    //no limit on captive groups
    //return string of sound if captive gets killed, empty string if not
    cap2Enc(Cap1, Cap2){
        this.noise = ""
        this.captiveKilled = false;
        //do the coin flip then execute the if statement

        if(captiveKilled){
            noise += "you hear a scream as another captive loses their life, and the manaical laughing of a freshly made killer rings through the labyrinth.";
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
        this.noise = "you hear a scream and a roar as the monster devours another victim.";
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

    //check the maze array around you, if statements and include player visibility value as conditionals to improve detail.
    //check if you see movement 
    //call flavor text every once in a while as you walk in empty spaces at random intervals. 
    //create a statement that lets you know that your flashlight decides to dim
    descriptionBuilder(){
        description = "new text";
        

        
        //description = sounds.join(" ");

        return description;
    }

    // Feeds into the frount end for player choice.
    //returns a list of strings that come from all available actions to the player including movement and actions. Max 9 actions in a turn .
    getActionList(){
        let availActions = [];

        if(this.turn == 0){
            availActions.push("pick up the revolver and open the door")
            return availActions;
        }else if(this.gameMaze[this.playerLoc[0]][this.playerLoc[1]] == "□" && this.roomMap.get(this.playerLoc) != "empty"){
                return ["search the room", "leave the room"];
        }
        else if(this.gameMaze[this.playerLoc[0],this.playerLoc[1]] == "□"){
                return ["rest in the room", "leave the room"];
        }else{

            //Movement actions
            let arr = [];
            let node = this.player.compass.currentDirection.head;
            for(let i = 0; i < this.player.compass.currentDirection.length; i++){
                if(node.data == "NORTH"){
                    arr.push([this.playerLoc[0] - 1, this.playerLoc[1]]);
                }else if(node.data == "EAST"){
                    arr.push([this.playerLoc[0], this.playerLoc[1]+1]);
                }else if(node.data == "SOUTH"){
                    arr.push([this.playerLoc[0]+1, this.playerLoc[1]]);
                }else if(node.data == "WEST"){
                    arr.push([this.playerLoc[0], this.playerLoc[1] -1]);
                }
                node = node.next;
            }
            
            let size = this.gameMaze.length;
            for(let i = 0; i < arr.length; i++){
                if(arr[i][0] > 0 && arr[i][0] < size -1 && arr[i][1] > 0 && arr[i][0] < size -1 && this.gameMaze[arr[i][0]][[arr[i][1]]] == " " || this.gameMaze[arr[i][0]][[arr[i][1]]] == "c"){
                    if(i == 0){
                        availActions.push("continue forward down the hall");
                    }else if(i == 1){
                        availActions.push("turn right and go down the hall");
                    }else if(i == 2){
                        availActions.push("turn back and go down the hall");
                    }else if(i == 3){
                        availActions.push("turn left and go down the hall");
                    }
                }
            }
            
            for(let i = 0; i < arr.length; i++){
                if(arr[i][0] > 0 && arr[i][0] < size -1 && arr[i][1] > 0 && arr[i][0] < size -1 && this.gameMaze[arr[i][0]][[arr[i][1]]] == "□"){
                    if(i == 0){
                        availActions.push("continue forward and enter the room");
                    }else if(i == 1){
                        availActions.push("turn right and enter the room");
                    }else if(i == 2){
                        availActions.push("turn back and enter the room");
                    }else if(i == 3){
                        availActions.push("turn left and enter the room");
                    }
                }
            }
            
            if(this.player.gun && this.player.bulletCount > 0){
                for(let i = 0; i < arr.length; i++){
                    if(arr[i][0] > 0 && arr[i][0] < size -1 && arr[i][1] > 0 && arr[i][0] < size -1 && this.gameMaze[arr[i][0]][[arr[i][1]]] == " " || this.gameMaze[arr[i][0][arr[i][1]]] == "c"){
                        if(i == 0){
                            availActions.push("look forward and fire your revolver");
                        }else if(i == 1){
                            availActions.push("turn right and fire your revolver");
                        }else if(i == 2){
                            availActions.push("turn back and fire your revovler");
                        }else if(i == 3){
                            availActions.push("turn left and fire your revovler");
                        }
                    }
                }
            }

            if(this.player.flashMineCount > 0){
                availActions.push("place a flash mine on the ground");
            }


        }
        return availActions;
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