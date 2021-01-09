class Roof{
    constructor(){
        var options={
            isStatic:true
        }
        this.body= Bodies.rectangle(250,150,400,25,options)
        this.width=400
        this.height=25
        World.add(world,this.body)
    }

    display()
    {
        fill("teal")
        rect(this.body.position.x,this.body.position.y,this.width,this.height)
    }
}