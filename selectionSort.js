// your code here
function selectionSort(array){
    for(let i = 0; i<array.length ; i++){
        batasBawah = i;
        for(let j = i; j<array.length; j++){
            if(array[j]<array[batasBawah]){
                batasBawah = j;
            }
        }
        if(batasBawah!=i){
            var swap = array[i];
            array[i] = array[batasBawah];
            array[batasBawah] = swap
        }
    }
    return array
}

console.log(selectionSort([33,2,52,106,73]))
//output: [2,33,52,73,106]

console.log(selectionSort([13,5,22,99,11]))
//output: [5,11,13,22,99]
