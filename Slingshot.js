class Slingshot{
    //Para que exista la resortera
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.025,
            length: 1
        }
        this.sling = Constraint.create(options);
        this.pointB=pointB;
        World.add(world, this.sling);

    }
    //El hexagono tenga una especie de hilo, y regrese a la resortera en caso de volver a intentarlo
    attach(body){
        this.sling.bodyA = body;
    }
    //El hexagono se suelte de la resortera
    fly(){
        this.sling.bodyA =null;
        
    }
    display(){
        //Para que el hilo exista
        if(this.sling.bodyA){
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        
        strokeWeight(4);
        stroke("turquoise");
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
        }
    
}