class Particle{
    constructor(x,y,r,options) {
      var options = {
          isStatic: false
      }
      this.body = Bodies.circle(x,y, this.r, options);
      this.color = color(random(0,255), random(0, 255), random(0, 255));
      World.add(world, this.body);;
    }
    display(){
      var pos =this.body.position;
      //elMode(CENTER);
      fill("white");
    circle(pos.x, pos.y, this.r);
    }
  };