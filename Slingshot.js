class Slingshot{
    constructor(b1, p2){
        var options = {
            bodyA : b1,
            pointB : p2,
            stiffness : 0.05,
            length: 20,
        }
        this.sling = Constraint.create(options);
        this.pointB = p2;
        World.add(world,this.sling);
    }
    display() {
        if(this.sling.bodyA){
            var pos1 = this.sling.bodyA.position;
            var pos2 = this.pointB;
            
            push();
            strokeWeight(5);
            stroke("turquoise");
            line(pos1.x, pos1.y, pos2.x, pos2.y);
            pop();

        }
    }
    fly(){
        this.sling.bodyA = null;
    }
}
