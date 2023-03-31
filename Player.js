class Player{
    attackChance;
    surviveChance;
    searchChance;
    captiveInParty;
    compass;
    visibility;

    gun;
    bulletCount;
    flashlight;
    batteryCount;
    machete;
    shivCount;
    bodyArmor;
    flashMineCount;
    motionTracker;
    
    
    constructor(attack, survive, search){
        this.attackChance = attack;
        this.surviveChance = survive;
        this.searchChance = search;
        this.captiveInParty = 0;
        this.visibility = 0;

        this.compass = new Compass();
        
        this.gun = true;
        this.bulletCount = 1;
        this.flashlight = false;
        this.batteryCount = 0;
        this.machete = false;
        this.shivCount = 0;
        this.bodyArmor = false;
        this.flashMineCount = 0;
        this.motionTracker = false;
    }

    setCaptiveInParty(){
        this.captiveInParty++;
    }

    addItem(item){
        let des = "";
        if(item == "flashlight"){
            this.flashlight = true;
            this.visibility = 1;
            des = "you find a flashlight sitting in the corner.";
            if(this.batteryCount == 1){
                des+=" you put a battery that you found earlier inside the light and the light shines even brigher.";
                this.visibility = 2;
            }
            
        }else if(item == "machete"){
            this.machete = true;
            des = "you find a machete stuck into the wall of the room.";
        }else if(item == "body armor"){
            this.bodyArmor = true;
            des = "you find a piece of body armor leaning against a wall."
        }else if(item == "motion tracker"){
            this.motionTracker = true;
            des = "you find a box with a motion tracker inside. this will prove very useful."
        }else if(item == "bullet"){
            this.bulletCount+=1;
            des = "you find a single bullet on a small table.";
        }else if(item == "battery"){
            this.batteryCount+=1;
            des = "you find a battery on a small table.";
            if(!this.flashlight){
                des+=" it looks like it would fit in a flashlight.";
            }else if(flashlight && this.batteryCount == 1){
                des+=" you slot the new battery into your flashlight and it shines even brighter than before."
                this.visibility = 2;
            }
        }else if(item == "shiv"){
            this.shivCount+=1;
            des = "you find a shiv in the corner."
        }else if(item == "flash mine"){
            this.flashMineCount+=1;
            des = "you find an unactive flashmine on the ground. this could be helpful."
        }
        return des;
    }

    move(direction, playerCords){
        //forward is index 0, right is 1, back is 2, left is 3
        let compassDir = "";
        let node = this.compass.currentDirection.head;
        for(let i = 0; i < this.compass.currentDirection.length; i++){
            if(i == direction){
                compassDir = node.data;
                break;
            }
            node = node.next;
        }
        //set value at index to string compassDir

        let newPlayerCords = null;
        //move in compassDir
        if(compassDir == "NORTH"){
            newPlayerCords = [playerCords[0]-1, playerCords[1]];
            this.compass.setCompass("NORTH");
        }else if(compassDir == "EAST"){
            newPlayerCords = [playerCords[0], playerCords[1]+1];
            this.compass.setCompass("EAST");
        }else if(compassDir == "SOUTH"){
            newPlayerCords = [playerCords[0]+1, playerCords[1]];
            this.compass.setCompass("SOUTH");
        }else if(compassDir == "WEST"){
            newPlayerCords = [playerCords[0], playerCords[1]-1];
            this.compass.setCompass("WEST");
        }

        return newPlayerCords;
    }

    perspective(actDir){
        let currNode = this.compass.currentDirection.head;
        for(let i  = 0; i < this.compass.currentDirection.length; i++){
            if(currNode.data == actDir){
                if(i == 0){
                    return "in front of you, ";
                }
                else if( i == 1){
                    return "to the right, ";
                }
                else if(i == 2){
                    return "behind you, "
                }
                else{
                    return "to the left, "
                }
                break;
            }
            currNode = currNode.next;
        }
    }
}