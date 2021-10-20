class slingshot {
constructor(body1,body2){
    var options={
    bodyA:body1,
    pointB:body2,
    stiffness:0.4,
    length:10
  }
  this.sling1=loadImage("sprites/sling1.png")
  this.sling2=loadImage("sprites/sling2.png")
  this.sling3=loadImage("sprites/sling3.png")
this.pointB=body2;
this.chain=Constraint.create(options);
World.add(world,this.chain);
}

fly(){
this.chain.bodyA=null;
}

display(){
    if(this.chain.bodyA){
    var pointA=this.chain.bodyA.position;
    var pointB=this.pointB;
    stroke(48, 22, 8);
    strokeWeight(3)
    if(pointA.x<220){
       line(pointA.x-20,pointA.y,pointB.x-10,pointB.y);
       line(pointA.x-20,pointA.y,pointB.x+30,pointB.y-3);
       image(this.sling3,pointA.x-30,pointA.y-10,15,30);
    }
    else{
       line(pointA.x+20,pointA.y,pointB.x-10,pointB.y);
       line(pointA.x+20,pointA.y,pointB.x+30,pointB.y-3);
       image(this.sling3,pointA.x+25,pointA.y-10,15,30);
    }
  }
    image(this.sling1,200,20);
    image(this.sling2,170,20);
   
  }
  
}
