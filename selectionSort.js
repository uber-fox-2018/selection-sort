function selectionSort(input) {
  for(let i = 0; i < input.length; i++) {
    let smallest = input[i];
    let smallestIndex = i
    for(let j = i+1; j < input.length; j++) {
      if(smallest > input[j]) {
        smallest = input[j];
        smallestIndex = j;
      }
    }

    let tmp = input[i];
    input[i] = smallest;
    input[smallestIndex] = tmp;
      
  }

  return input;
  
}

console.log(selectionSort([8, 5, 7, 1, 9, 3]));

// console.log(selectionSort([33, 2, 52, 106, 73]));
// console.log(selectionSort([13, 5, 22, 99, 11]));