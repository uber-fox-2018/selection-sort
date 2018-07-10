function selectionSort (arr) {

    for (let i = 0; i < arr.length; i++) {
        let tmpVal = arr[i]
        let tmpInd = i
        for (let j = i; j < arr.length; j++) {
            if (tmpVal > arr[j]) {
                tmpVal = arr[j]
                tmpInd = j
            }
            if (j === arr.length-1) {
                let y = arr[i]
                arr[i] = tmpVal
                arr[tmpInd] = y 
            }
        } 
    }
    return arr
}

console.log(selectionSort([8,5,7,1,9,3])) 
console.log(selectionSort([33,2,52,106,73])) 
console.log(selectionSort([13,5,22,99,11])) 
