class division{
    constructor(x, y, w, h){
        var stayStill={
            isStatic: true
        }
        this.w = w;
        this.h = h;
        this.body = Bodies.rectangle(x, y, w, h, stayStill);
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        fill(255, 255, 255);
        rect(pos.x, pos, this.w, this.h);
    }
}