class Papers {
    constructor(x, y) {
        var options ={
            'isStatic': true,
            'restitution': 0.3,
            'friction': 0.5,
            'density': 1.2
        }    
      this.body = Bodies.circle(x, y, 20, options);
      this.radius = 20;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      pos.x= mouseX;
      pos.y = mouseY;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(RADIUS);
      //strokeWeight(5);
      //stroke("red");
      fill(0,0,0);
      ellipse(0, 0, this.radius, this.radius);
      pop();
    }
  };  