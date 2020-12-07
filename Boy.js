class boy{
    constructor(x , y, bodyA, pointB){
        var options = {
           bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB=pointB
        this.body = Bodies.rectangle(x, y, options);
        this.body = Constraint.create(options);
        World.add(world, this.body);
        this.image=loadImage("Plucking mangoes/boy.png")
    }

    display(){
        if(this.body.bodyA){
            var pointA = this.hand.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        image(this.image, 0, 0, 50, 150);
    }

        }
        
    fly(){
        this.body.bodyA=null;
    }
    
}