// your code here
function selectionSort(arr) {
    let resultArr = []
    while (arr.length - 1 >= 0) {
        let min = 0
        for(let i = 0; i < arr.length; i++) {
            if (arr[i] < arr[min]) { // if element < current minimum contain index in min!
                min = i
            }
        }
        resultArr.push(arr[min]) // this will push currrent minimum in arr
        arr.splice(min, 1) // arr will splice and length will be decrease
    }
    return resultArr
}

console.log(selectionSort([33, 2, 52, 106, 73]));
// console.log(selectionSort([13, 5, 22, 99, 11]));
