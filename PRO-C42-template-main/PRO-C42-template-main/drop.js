class Drop{
constructor(x,y){
var options={
friction:0.6,
restitution:0.3
}
this.rain=Bodies.circle(x,y,7,options);
this.radius=7;
World.add(world,this.rain)
}

display(){
fill("cyan")
ellipseMode(CENTER)
ellipse(this.rain.position.x,this.rain.position.y,this.radius,this.radius)
}


updateDrops(){
if(this.rain.position.y>height){
  Matter.Body.setPosition(this.rain,{x:random(0,500),y:random(0,100)})

}
    
}




}




