function sort(arr) {

    for (var i = 0; i < arr.length-1; i++) {
        var min = i
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j
            }
        }
        if (min !== i) {
            var tmp = arr[i]
            arr[i] = arr[min]
            arr[min] = tmp
        }
    }
    return arr
}


//console.log (sort([8, 5, 7, 1, 9, 3]))
console.log (sort([33, 2, 52, 106, 73]))
console.log (sort([13, 5, 22, 99, 11]))
