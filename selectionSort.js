const selectionSort = (number) => {
  const length = number.length

  for (let index = 0; index < length; index++) {
    var smallIndex = index
    for (let nextIndex = index + 1; nextIndex < length; nextIndex++) {
      if (number[nextIndex] < number[smallIndex]) {
        smallIndex = nextIndex
      }
    }

    if (smallIndex != index) {
      var currentNumber = number[index]
      number[index] = number[smallIndex]
      number[smallIndex] = currentNumber
    }
  }
  return number
}

console.log(selectionSort([33, 2, 52, 106, 73]));
console.log(selectionSort([13, 5, 22, 99, 11]));
