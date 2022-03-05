const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const circle = {
   x: 20,
   y: 200,
   size: 30,
   speed: 5,
   dx: 0,
   dy: 0,
};



function drawCircle(){
   ctx.beginPath();
   ctx.arc(circle.x, circle.y, circle.size, 0, Math.PI * 2);
   ctx.stroke();
}



//clering canvas in order to replace all befor drawed circles
function clear(){
   ctx.clearRect(0, 0, canvas.width, canvas.height);
};

function newPos(){
   circle.x += circle.dx;
   circle.y += circle.dy;
   detectWalls();
}


function detectWalls() {
   if(circle.x < 0){
      circle.x = 0;
   }

   if(circle.x + circle.w > canvas.width){
      circle.x = canvas.width - circle.size;
   }

   if(circle.y < 0){
      circle.y = 0;
   }

   if(circle.y + circle.height > canvas.height){
      circle.y = canvas.height - circle.size;
   }
}

function move(){
   clear();
   drawCircle();
   newPos();
   requestAnimationFrame(move);
}

function moveUp() {
   circle.dy = -circle.speed;
}
function moveDown() {
   circle.dy = circle.speed;
}
function moveLeft() {
   circle.dx = -circle.speed;
}
function moveRight() {
   circle.dx = circle.speed;
}

function keyPress(e) {
   if(e.key === 'ArrowRight'){
      moveRight();
   }
   else if(e.key === 'ArrowLeft'){
      moveLeft();
   }
   else if(e.key === 'ArrowUp'){
      moveUp();
   }
   else if(e.key === 'ArrowDown'){
      moveDown();
   }
};

function keyLeave(e) {
   if(e.key == 'ArrowRight' ||
      e.key == 'ArrowLeft' ||
      e.key == 'ArrowUp' ||
      e.key == 'ArrowDown')
      {
         circle.dx = 0;
         circle.dy = 0;
      }
   }
move();

document.addEventListener('keydown',keyPress);
document.addEventListener('keyup',keyLeave);
