const selectionSort = (arr) => {
  let newArr = [];
  
  while (arr.length > 0){
    let currentMin = arr[0];
    let indexMin = 0;
    for (let i in arr){
      if (arr[i] < currentMin){
        currentMin = arr[i];
        indexMin = +i
      }
    }
    newArr.push(currentMin);
    arr.splice(indexMin, 1)
  }
  return newArr;
}

console.log(selectionSort([5,2,3,4,1]))