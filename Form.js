class Form {

  constructor() {

    
    this.reset= createButton("Reset");
  }
 

  display(){
  
   
    this.reset.position(displayWidth-100,20);
   
    this.reset.mousePressed(()=>{
      player.updateCount(0);
      game.update(0);
      location.reload();
    })
  }
}
