class Player{
    attackChance;
    surviveChance;
    searchChance;
    captiveInParty;
    
    constructor(attack, survive, search){
        this.attackChance = attack;
        this.surviveChance = survive;
        this.searchChance = search;
        this.captiveInParty = 0;
    }

    setCaptiveInParty(){
        this.captiveInParty++;
    }
}