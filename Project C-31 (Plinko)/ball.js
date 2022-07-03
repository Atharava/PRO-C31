class ball{
    constructor(x, y, r){
        var bounce={
            isStatic: false,
            restitution: 0.4
        }
        this.r = r;
        this.body = Bodies.circle(x, y, r, bounce);
        this.color = color(random(0, 255), random(0, 255), random(0, 255));
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;

        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(pos.x, pos.y, this.r, this.r);
    }
}