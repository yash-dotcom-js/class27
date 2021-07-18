class Sticky{
    constructor(bodyA, bodyB)  {
        var options = {
            bodyA:bodyA,
            bodyB:bodyB,
            length:0.5,
            stiffness:0.65
        }
        this.Sticky = Constraint.create(options)
        World.add(world, this.Sticky)

    }
    display(){
        var pointA= this.Sticky.bodyA.position
        var pointB= this.Sticky.bodyB.position
        line(pointA.x, pointA.y, pointB.x, pointB.y)
        }
}

