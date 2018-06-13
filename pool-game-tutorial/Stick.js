const STICK_ORIGIN = new Vector2(970, 11);

function Stick(position){
  this.position = position;
}

Stick.prototype.update = function(){

  //testing
  // this.position = Mouse.position
  //
  // if(Mouse.left.pressed){
  //   console.log('pressed left')
  // }
  //
}

Stick.prototype.draw = function(){
  Canvas.drawImage(sprites.stick, this.position, STICK_ORIGIN);
}
