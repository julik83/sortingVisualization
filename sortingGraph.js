const canvasA = document.getElementById('sortingGraphC');
const ctxA = canvasA.getContext('2d');
const ARRAY_LENGTH_a = 300;


/*variable type changed from cost to var in order to have possibility to asign empty array befor loading new values*/               
var randomArray_a = [];
/*function sleep used to slow down the motion of sorting in order to have nice visualization. */
function sleep(milliseconds) {
   const date = Date.now();
   let currentDate = null;
   do {
     currentDate = Date.now();
   } while (currentDate - date < milliseconds);
 }

/*function cleanup used in drawSortedValues() in order to cleanup canvas before each iteration and in drawValues() in order to cleanup before new values load to canvas" */
function cleanup(){
   ctxA.clearRect(0, 0, canvasA.width, canvasA.height);
   }
/*function to generate values called by drawValues()*/
function makeValues(){
   randomArray_a = []
   for(let i = 0; i<ARRAY_LENGTH_a; i++){
       randomArray_a.push(Math.floor(Math.random()*400))
       }
}

/*draw values into the canvas called by onclick ebvent button load*****************/
function drawValues(){
   cleanup()
   makeValues()
   var s = 10;
   for(var i = 0; i <= randomArray_a.length; i++){   
   s += 3; 
   ctxA.fillRect(s, canvasA.height - randomArray_a[i], 1, randomArray_a[i])
   }
}


/*this function is redrawing values after each run of sortValuesA() and is called by BigSort()*/ 
function drawSortedValues(){
   cleanup();
   /*https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors*/
   var s = 10;

   for(var i = 0; i <= randomArray_a.length; i++){
   ctxA.fillStyle = 'rgb(' + Math.floor(255 - 42.5 * randomArray_a[i]) + ', ' + Math.floor(255 - 42.5 * (randomArray_a[i])/2) + ',' + 0 +')';       
   ctxA.fillRect(s, canvasA.height - randomArray_a[i], 1, randomArray_a[i])
   s += 3;
   }
}
//IMPORTANT COMMENT//
/*the sortValuesA(m) is the function which is called after each evaluation of array sequence. Evaluation and calling happens in bigSort().  The atribute m provides the value(incremented in each call) for outer loop which always does only one iteration and ends. This is necesary because the browser doesnt want to refresh while any loop is running*/
function sortValuesA(m){
   function swap(arr,xp, yp){       
       var temp = arr[xp];
       arr[xp] = arr[yp];
       arr[yp] = temp;
      }
   //this is selectionSort copied from web, with updated outer loop//       
   function selectionSort(arr,  n){
         var i, j, min_idx;  

         // HERE THE VALUE IS ALWAYS BIGGER ONLY BY 1 THEN I//
            for (i = m-1; i < m; i++)                       
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
/*the variable valueOfBigLoop is used also in onclick function for sorting because the bigSort() needs it to 0 before it starts, this is the value/atribute being incremented for outer loop*/
var valueOfBigLoop = 0;
function bigSort(){
   var sorted = false;
   //checkForSequence function checks if the array is sorted or not yet
   checkForSequence();   
   function checkForSequence(){
      var arrLenght = randomArray_a.length;
      for(var i = 0; i<=arrLenght; i++){
         if(randomArray_a[i]>randomArray_a[i+1]){
            sorted = false;
            break;
            }
         else
            sorted = true;
            continue;   
      }
   }  
   //condition which decides if the sorting has to continue or not in case the array is sorted 
   if(sorted == false){
      sleep(30)
      valueOfBigLoop += 1;
      sortValuesA(valueOfBigLoop);
      drawSortedValues();
      requestAnimationFrame(bigSort);
   }
   else
      drawSortedValues()
}

/*buttons*/
var showValuesButton = document.getElementById("load")
showValuesButton.onclick = function(){drawValues()}

var sortValuesButton = document.getElementById("sort")
sortValuesButton.onclick = function(){valueOfBigLoop = 0;bigSort()}

