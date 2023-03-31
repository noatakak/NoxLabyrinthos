class Captive{
    row;
    col;
    captiveCount;
    escaping;
    escapeCount;
    spotted;
    
    constructor(x, y) {
        this.row = x;
        this.col = y;
        this.captiveCount = 1;
        this.escaping = false;
        this.escapeCount = 0;
        this.spotted = false;
    }

    setcaptiveCount(){
        captivecount++;
        //might not be accessing the field correctly
    }

    checkVisibility(){

    }
}