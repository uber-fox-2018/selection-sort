// your code here
function selectionSort(array) {
    let output = []
    while (array.length !== 0) {
        let index = 0
        let min = array[0]
        for (let i = 0; i < array.length; i++) {
            if (array[i] < min) {
                min = array[i]
                index = i
            }
        }
        output.push(min)
        array.splice(index,1)
    }
    return output
}

console.log(selectionSort([33,2,52,106,7]));
console.log(selectionSort([13,5,22,99,11]));
