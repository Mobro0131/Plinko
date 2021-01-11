class Plinko {
    constructor(x,y) {
      var options = {
          restitution:0.3,
          density:1.2,
          friction:0.2,
          isStatic:true
          
      }
      this.body = Bodies.circle(x,y,10,options);
      this.radius=10;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      ellipseMode(CENTER);
      fill("White");
      ellipse(pos.x, pos.y, this.radius*2,this.radius*2);

    }
  };