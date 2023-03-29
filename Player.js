class Player{
    attackChance;
    surviveChance;
    searchChance;
    captiveInParty;
    compass;

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
        }else if(item == machete){
            this.machete = true;
        }else if(item == "body armor"){
            this.bodyArmor = true;
        }else if(item == "motion tracker"){
            this.motionTracker = true;
        }else if(item == "bullet"){
            this.bulletCount+=1;
        }else if(item == "battery"){
            this.batteryCount+=1;
        }else if(item == "shiv"){
            this.shivCount+=1;
        }else if(item == "flash mine"){
            this.flashMineCount+=1;
        }
        return des;
    }

    move(direction, playerCords){
        //forward is index 0, right is 1, back is 2, left is 3
        let compassDir = "";
        for(let i = 0; i < this.compass.currentDirection.length; i++){
            let node = this.compass.currentDirection.head;
            if(i == direction){
                compassDir = node.data;
                break;
            }
            node = node.next;
        }
        //set value at index to string compassDir

        //move in compassDir
        if(compassDir == "NORTH"){
            let newPlayerCords = [playerCords[0]-1, newPlayerCords[1]];
            this.compass.setCompass("NORTH");
        }else if(compassDir == "EAST"){
            let newPlayerCords = [playerCords[0], newPlayerCords[1]+1];
            this.compass.setCompass("EAST");
        }else if(compassDir == "SOUTH"){
            let newPlayerCords = [playerCords[0]+1, newPlayerCords[1]];
            this.compass.setCompass("SOUTH");
        }else if(compassDir == "WEST"){
            let newPlayerCords = [playerCords[0], newPlayerCords[1]-1];
            this.compass.setCompass("WEST");
        }

        return newPlayerCords
    }
}