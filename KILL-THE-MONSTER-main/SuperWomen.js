class SuperWomen{
    constructor(x,y,width,height){
var options={
    density:1,
    frictionAir:2
}

this.body=Bodies.rectangle(x,y,width,height,options)
this.image=loadImage("Superwomen.png");

this.width=width
this.height=height;
World.add(world,this.body)
    }
 
    display(){

        
        push();
        translate(this.body.position.x,this.body.position.y)
      
       image(this.image,0,0,this.width,this.height)
        pop()
    }
}