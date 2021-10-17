class bear extends BaseClass {
    constructor(x, y) {
      super(x,y,50,50);
      this.image=loadImage("sprites/enemy3.png");
      this.visible = 255;
    }
    display(){
     
     
      if(this.body.speed > 3){
        Matter.World.remove(world,this.body)
        this.visible -= 5
        push()
        tint(255,this.visible)
        image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
        pop()
      }
      else{
        super.display()
      }
    }
  };
  