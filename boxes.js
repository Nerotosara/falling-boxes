class boxes{
constructor(x,y,width,height){
    var box={
restitution:0.9
    }
    
    this.body = Bodies.rectangle(x,y,width,height,box);
    this.width = width;
    this.height = height;  

    World.add (world,this.body);
}
display(){
    var pos = this.body.position;
var angle = this.body.angle;
push();
  translate(pos.x,pos.y);
  rotate(angle);
    fill("green")
   rectMode(CENTER)
   rect(0,0,this.width,this.height);

   pop ();
  }










}