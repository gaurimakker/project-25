class Paper {
    constructor(x,y) {
      var options = {
          isStatic: false,
          restitution:0.3,
          density:1.2,
          friction:0.5
          
      }
      this.body = Bodies.circle(x,y,15,options);
      this.radius=30;
      this.image=loadImage("paper.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
     // ellipseMode(CENTER);
     // fill("white");
     // ellipse(pos.x, pos.y, this.radius, this.radius);
     image(this.image,pos.x, pos.y-20, this.radius, this.radius);
    }
  }