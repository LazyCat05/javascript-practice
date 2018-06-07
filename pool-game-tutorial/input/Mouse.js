function handleMouseMove(event){

  let x = event.pageX;
  let y = event.pageY;

  Mouse.position = new Vector2(x, y);
}

function handleMouseDown(event) {

  handleMouseMove(event);

  
}

function MouseHandler(){
  this.left = new ButtonState();
  this.middle = new ButtonState();
  this.right = new ButtonState();

  this.position = new Vector2();

  document.onmousemove = handleMouseMove;
  document.onmousedown = handleMouseDown;
  document.onmouseup = handleMouseUp;
}

let Mouse = new MouseHandler();
