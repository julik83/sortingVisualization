const canvasA = document.getElementById('sortingGraphC');
const ctxA = canvasA.getContext('2d');


/*generate values***********************/
const ARRAY_LENGTH_a = 10;                
const randomArray_a = [];

showValues = function(){
   for(let i = 0; i<ARRAY_LENGTH_a; i++){
       randomArray_a.push(Math.floor(Math.random()*400))
       }
}

showValues();
console.log(randomArray_a);

/*draw values into the canvas*****************/
var s = 5;
for(var i = 0; i <= randomArray_a.length; i++){   
  s += 25; 
  ctxA.fillRect(s, canvasA.height - randomArray_a[i], 15, randomArray_a[i])
}


/*sort values******************************/
sortValues = function(){

   function swap(arr,xp, yp){       
       var temp = arr[xp];
       arr[xp] = arr[yp];
       arr[yp] = temp;
      }
   
   
   function selectionSort(arr,  n){

           var i, j, min_idx;       
           // One by one move boundary of unsorted subarray
           for (i = 0; i < n-1; i++)
           {
               // Find the minimum element in unsorted array        
               min_idx = i;                
               for (j = i + 1; j < n; j++){
                   if (arr[j] < arr[min_idx])
                       min_idx = j
               }
               // Swap the found minimum element with the first element
               swap(arr,min_idx, i)
           }
       }
   
   var nl = randomArray_a.length;
   selectionSort(randomArray_a, nl);
   }
//sortValues();
//checkForSequence();   






function bigSort(){
   var unsorted = false;
   checkForSequence();
   function checkForSequence(){
      var arrLenght = randomArray_a.length;
      for(var i = 0; i<=arrLenght; i++){
         if(randomArray_a[i]>randomArray_a[i+1]){
            unsorted = true;
            break;
            }
         else
            unsorted = false;
            continue;   
      }
   }
   
   if(unsorted == true){
      sortValues();
      drawSortedValues();
      bigSort();
   }
   else
      drawSortedValues()
}

bigSort();

console.log(randomArray_a)
   



/*draw sorted values*/

function drawSortedValues(){
   function cleanup(){
      ctxA.clearRect(0, 0, canvasA.width, canvasA.height);
      }
   cleanup();

   ctxA.fillRect(20,20, 50, 50);

   var s = 5;
   for(var i = 0; i <= randomArray_a.length; i++){   
   s += 25; 
   ctxA.fillRect(s, canvasA.height - randomArray_a[i], 15, randomArray_a[i])
   }
}







/*ctx.stroke;

showValues = function(){

   for(let i = 0; i<ARRAY_LENGTH; i++){
      randomArray.push(Math.random())
      }
  

}*/

