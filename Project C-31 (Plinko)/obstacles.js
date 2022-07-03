class Circles{
    constructor(){

        this.plinkos = [];

        for(var x = 40; x <= 480; x=x+50){
            this.plinkos.push(new plinko(x, 75, 10));
        }
        for(var x = 15; x <= 480-10; x=x+50){
            this.plinkos.push(new plinko(x, 175, 10));
        }
        for(var x = 40; x <= 480; x=x+50){
            this.plinkos.push(new plinko(x, 275, 10));
        }
        for(var x = 15; x <= 480-10; x=x+50){
            this.plinkos.push(new plinko(x, 375, 10));
        }

    }
    display(){
        for(var x = 40; x <= 480; x=x+50){
            ellipse(x, 75, 10, 10);
        }
        for(var x = 15; x <= 480-10; x=x+50){
            ellipse(x, 175, 10, 10);
        }
        for(var x = 40; x <= 480; x=x+50){
            ellipse(x, 275, 10, 10);
        }
        for(var x = 15; x <= 480-10; x=x+50){
            ellipse(x, 375, 10, 10);
        }
    }
}