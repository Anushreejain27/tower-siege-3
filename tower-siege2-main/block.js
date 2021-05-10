class block{
constructor(x,y){
var options={

restitution : 0.2,
friction : 0
// density : 0.01,

}
this.visiblity=255
this.body=Bodies.rectangle(x,y,45,55,options)
this.width=45
this.height=55
World.add(world,this.body)
}

display(){
    var pos = this.body.position
     var angle = this.body.angle
if (this.body.speed<3){
push()
translate(pos.x, pos.y)
rotate ()
rectMode(CENTER)
//fill("yellow")
stroke("white")
fill("yellow")
strokeWeight(4)
//tint(255, 126)
rect(0,0,this.width,this.height)
pop()
}
else{
World.remove(world,this.body)
push()
this.visiblity=this.visiblity-5
pop()
}



}





















}



















