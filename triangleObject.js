class TriangleObject{
    constructor(x,y,radius,rotation){
        var options2 = {
            isStatic: true
        }
        
        this.body = Bodies.polygon(x,y,3,radius,options2)
   World.add(world,this.body)
   Matter.Body.rotate(this.body,rotation)
    }
    display(){
        var pos = this.body.position
    fill("grey")
    rect(pos.x,pos.y,this.width,this.height)
    }
}
