function Vector2(x, y){

  // this.x = typeof x !== undefined ? x : 0;
  if (x !== undefined){
    this.x = x
  } else {
    this.x = 0
  }
  // this.y = typeof y !== undefined ? y : 0;
  if(y !== undefined){
    this.y = y;
  } else {
    this.y = 0;
  }

}
