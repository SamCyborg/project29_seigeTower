class Box2 extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    //this.image = loadImage("sprites/wood1.png");
  }

display(){
    var pos =this.body.position;
    rectMode(CENTER);
    fill(315,35,225);
    rect(pos.x, pos.y, this.width, this.height);
  }
};
