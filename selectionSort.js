// your code here
function selectionSort(arr) {

    for (let a = 0; a < arr.length; a++) {
        let index = a
        for (let b = a + 1; b < arr.length; b++) {
            if (arr[b] < arr[index]) {
                index = b
            }
        }
        const temp = arr[a];
        arr[a] = arr[index];
        arr[index] = temp
    }
    return arr
}

console.log(selectionSort([2, 4, 9, 2, 8, 7, 6, 3, 1]));
console.log(selectionSort([2,3,8,6,8,6,5,4,5,]));