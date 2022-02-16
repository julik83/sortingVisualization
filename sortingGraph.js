const canvasA = document.getElementById('sortingGraphC');
const ctxA = canvasA.getContext('2d');

/*const ARRAY_LENGTH = 10                 //vytvarame hodnoty
const randomArray = []*/
for(var i = 0; i < 50; i+=10){
   var s = 5;
   s += 25; 
  ctxA.fillRect(25, canvasA.height - i, 20, i)
}
/*ctx.stroke;

showValues = function(){

   for(let i = 0; i<ARRAY_LENGTH; i++){
      randomArray.push(Math.random())
      }
  

}*/

