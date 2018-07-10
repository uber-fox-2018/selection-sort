// your code here
var array = [33,2,52,106,73]

function selectionSort(array) {
    var newArray = []
      while(array.length !== 0){
          min = array[0]
          indexMin = 0
          for(var j = 1; j < array.length;j++){
               if(array[j] < min){
                   min = array[j]
                   indexMin = j
               }
          } 
          newArray.push(min)
          array.splice(indexMin,1)
      }
    return newArray
    
}

console.log(selectionSort(array));
