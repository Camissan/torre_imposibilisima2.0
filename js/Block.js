class Block{
    constructor(x, y, width, height) {
        var options = {
           
            restitution :0.4,
            friction :0.0,
            //isStatic:true
           
        }
        this.visiblity=255;
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("Bloque.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        var pos= this.body.position;
        if(this.body.speed<15){
          imageMode(CENTER)
          image(this.image,pos.x,pos.y,this.width,this.height);
        }
        else{
          World.remove(world,this.body);
          push();
          this.visiblity-=5;
          tint(255,this.visiblity);
          image(this.image,pos.x,pos.y,this.width,this.height);
          pop();
        }
        
        
      }
}
