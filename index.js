


const ARRAY_LENGTH = 10                 //vytvarame hodnoty
const randomArray = []

showValues = function(){

    for(let i = 0; i<ARRAY_LENGTH; i++){
        randomArray.push(Math.random())
        var para = []
        para[i] = document.createElement("p"); 
        para[i].setAttribute("id", i)         // Create a <p> element
        para[i].innerHTML = randomArray[i];   // Insert text
        document.getElementById("myDiv").appendChild(para[i]);
        }
}

sortValues = function(){

    function swap(arr,xp, yp){       
        var temp = arr[xp];
        arr[xp] = arr[yp];
        arr[yp] = temp;
        p1 = document.getElementById(xp)
        p2 = document.getElementById(yp)
        p1.innerHTML = arr[xp]
        p2.innerHTML = arr[yp]
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
    
    var nl = randomArray.length;
    selectionSort(randomArray, nl);
    

    }    

var showValuesButton = document.getElementById("load")
showValuesButton.onclick = function(){showValues()}

var sortValuesButton = document.getElementById("sort")
sortValuesButton.onclick = function(){sortValues()}




      