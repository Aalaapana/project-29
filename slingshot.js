class SlingShot{
    constructor(body1, point2){
        var options = {
            bodyA: body1,
            pointB: point2,
            length: 10,
            stiffness: 0.02
        }
\
        
        this.sling = Constraint.create(options);
        this.pointB = point2
        World.add(world,this.sling);

    }
    display(){
        image(this.sling1,150,30);
        image(this.sling2,120,30)
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position
            var pointB = this.pointB
            push();
            
            stroke(48,22,8);
            if(pointA.x < 100){
                strokeWeight(10)
            }else{
                strokeWeight(3)
            }
            line(pointA.x, pointA.y, pointB.x - 10, pointB.y);
            line(pointA.x, pointA.y, pointB.x + 30, pointB.y);
            pop()
            image(this.sling3,pointA.x-15,pointA.y,10,30);
            //line(pointA.x,pointA.y,pointB.x,pointB.y);
        }
    }

    fly(){
        this.sling.bodyA = null;
    }

    attach(body){
        this.sling.bodyA = body;
    }
}