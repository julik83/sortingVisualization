const canvasA = document.getElementById('sortingGraphC');
const ctxA = canvasA.getContext('2d');
var valueOfBigLoop = 0;

/*generate values***********************/
const ARRAY_LENGTH_a = 300;                
const randomArray_a = [];

function sleep(milliseconds) {
   const date = Date.now();
   let currentDate = null;
   do {
     currentDate = Date.now();
   } while (currentDate - date < milliseconds);
 }

makeValues = function(){
   for(let i = 0; i<ARRAY_LENGTH_a; i++){
       randomArray_a.push(Math.floor(Math.random()*400))
       }
}
makeValues();

/*draw values into the canvas*****************/

   var s = 1;
   for(var i = 0; i <= randomArray_a.length; i++){   
   s += 2; 
   ctxA.fillRect(s, canvasA.height - randomArray_a[i], 1, randomArray_a[i])
   }

/*sort values******************************/
function sortValuesA(){

   function swap(arr,xp, yp){       
       var temp = arr[xp];
       arr[xp] = arr[yp];
       arr[yp] = temp;
       //sleep(40)
       drawSortedValues();
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
             requestAnimationFrame(selectionSort);
         }
     }
   var nl = randomArray_a.length;
   selectionSort(randomArray_a, nl); 
   }

   sortValuesA();
//sortValues();
//checkForSequence();   

/*function bigSort(){
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
      sleep(30)
      valueOfBigLoop += 1;
      sortValuesA(valueOfBigLoop);
      drawSortedValues();
      requestAnimationFrame(bigSort);
   }
   else
      drawSortedValues()
}

bigSort();*/
  
/*draw sorted values*/
function drawSortedValues(){
   function cleanup(){
      ctxA.clearRect(0, 0, canvasA.width, canvasA.height);
      }
   cleanup();

   ctxA.fillRect(20,20, 50, 50);

   var s = 1;
   for(var i = 0; i <= randomArray_a.length; i++){   
   s += 3; 
   ctxA.fillRect(s, canvasA.height - randomArray_a[i], 1, randomArray_a[i])
   }
}


/*ctx.stroke;

showValues = function(){

   for(let i = 0; i<ARRAY_LENGTH; i++){
      randomArray.push(Math.random())
      }
  

}*/

