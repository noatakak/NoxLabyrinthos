class Player{
    attackChance;
    surviveChance;
    searchChance;
    captiveInParty;
    compass

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

    addItem(){
        
    }

    moveForward(playerCords){

    }

    moveBackward(playerCords){

    }

    moveLeft(playerCords){

    }

    moveRight(playerCords){

    }
}