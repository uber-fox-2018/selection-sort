function selectionSort(number) {
   
    let sortedNumber = []
    while(number.length !== 0) {
        let min = number[0];
        let index = 0
        for (let i = 0; i < number.length; i++) {
            if (number[i] < min) {
                min = number[i]
                index = i
            }
        }
        sortedNumber.push(min)
        number.splice(index, 1)
    }
    return sortedNumber
}
console.log(selectionSort([33, 2, 52, 106, 73])); //[2, 33, 52, 73, 106]
console.log(selectionSort([13, 5, 22, 99, 11])); //[5, 11, 13, 22, 99]