class Captive{
    row;
    col;
    captiveCount;
    escaping;
    escapeCount;
    
    constructor(x, y) {
        this.row = x;
        this.col = y;
        this.captiveCount = 1;
        this.escaping = false;
        this.escapeCount = 0;
    }

    setcaptiveCount(){
        captivecount++;
        //might not be accessing the field correctly
    }

    checkVisibility(){
        
    }
}