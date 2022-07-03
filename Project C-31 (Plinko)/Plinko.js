class plinko{
    constructor(x, y, r){
        var stayStill={
            isStatic: true
        }
        this.r = r;
        this.body = Bodies.circle(x, y, r, stayStill);
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        fill(255, 255, 255);
        ellipse(pos.x, pos, this.r, this.r);
    }
}