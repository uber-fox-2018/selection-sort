// your code here

function selectionSort(num) {
    let length = num.length

    for(let i=0; i<length; i++){
        let min = i;
        for(let j=i+1; j<length; j++){
            if(num[j] < num[min]){
                min = j;
            }
        }

        if(min != i){
            let tmp = num[i];
            num[i] = num[min];
            num[min] = tmp;
        }
    }
    return num;
    
}

console.log(selectionSort([33, 2, 52, 106, 73]))
// Output [2, 33, 52, 73, 106]

console.log(selectionSort([13, 5, 22, 99, 11]))
// Output [5, 11, 13, 22, 99]
