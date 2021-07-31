class Question {

  constructor() {
    this.button = createButton('Submit');
    
  }

  hide(){    
   this.button.hide();
  }

  display(){
   
    this.button.position(290, 300);

    this.button.mousePressed(()=>{
      
      this.button.hide();
      

    
   
  });
  
  }
}
