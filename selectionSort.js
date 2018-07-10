// your code here
var array1 = [7, 2, 4, 1, 9, 5, 3, 6, 8]
var array2 = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]

function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
        let min = i;
        for (let j = i; j < array.length; j++) {
            if (array[j] < array[min])
                min = j;
        }
        let temp = array[i];
        array[i] = array[min];
        array[min] = temp;
    }

    return array;
}

console.log(selectionSort(array1))
console.log(selectionSort(array2))
