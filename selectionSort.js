function selectionSort(arr){
    for(var i = 1 ; i < arr.length ; i++){
        for(var j = 0 ; j < i ; j++){
            if(arr[i] < arr[j]){
                var tmp = arr[i]
                arr[i] = arr[j]
                arr[j] = tmp
            }
        }
    }
    return arr
}
console.log(selectionSort([ 33, 2, 52, 106, 73 ]))  // [ 2, 33, 52, 73, 106 ]
console.log(selectionSort([ 13, 5, 22, 99, 11]))    // [ 5, 11, 13, 22, 99 ]
