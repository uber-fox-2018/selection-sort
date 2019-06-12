function selectionSort(arr){
    for(var i = 0 ; i < arr.length ; i++){
        var tmpArr = arr[i] // 3
        var tmpPmr = i // 0
        for(var j = i ; j < arr.length ; j++){
            if(tmpArr > arr[j]){
                tmpArr = arr[j] // 2
                tmpPmr = j // 9
            }
        }
        var tmp = arr[i]
        arr[i] = tmpArr
        arr[tmpPmr] = tmp
    }
    return arr
}
console.log(selectionSort([ 3, 44, 38 ,5 ,47, 15, 36 ,26 ,27, 2, 46 ]))
console.log(selectionSort([ 13, 5, 22, 99, 11]))    // [ 5, 11, 13, 22, 99 ]
