class RectangleObject{
    constructor(x,y,width,height){
        var options1 = {
            isStatic: true
        }
        
        this.body = Bodies.rectangle(x,y,width,height,options1)
   this.width = width
   this.height = height
   World.add(world,this.body)
    }
    display(){
        var pos = this.body.position
    rectMode(CENTER)
    fill("grey")
    rect(pos.x,pos.y,this.width,this.height)
    }
}
