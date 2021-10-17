class Pumpkin extends BaseClass {
    constructor(x, y) {
      super(x,y,80,80);
      this.image=loadImage("sprites/bird.png");
      this.smoke = loadImage("sprites/smoke.png")
      this.trajectory = []

    };
    display(){
     
      super.display();
      var position = [this.body.position.x,this.body.position.y]
      this.trajectory.push(position)
      console.log(this.trajectory)
      for(var i = 0;i<this.trajectory.length;i++){
        image(this.smoke,this.trajectory[i][0],this.trajectory[i][1])
      }
    };
  };
