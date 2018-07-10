// your code here
function selectionSort(arr) {
    let result = [];
    while(arr.length - 1 >= 0) {
        let min = 0;
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] < arr[min]) {
                min = i;
            }
        }
        result.push(arr[min]);
        arr.splice(min, 1);
    }
    return result;
}

console.log(selectionSort([33, 2, 52, 106, 73]));
console.log(selectionSort([13, 5, 22, 99, 11]));