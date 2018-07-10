function selectionSort(arr){
    for(let i=0;i<arr.length;i++){
        let smallest=arr[i];
        let smallestPos=i;
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]<smallest){
              smallest = arr[j];
              smallestPos = j;
            } 
        }
        let bigger = arr[i];
        arr[i]= smallest;
        arr[smallestPos]=bigger;
    }
    return arr;
}
console.log(selectionSort([8,5,7,1,9,3]));//[1,3,5,7,8,9,]
console.log(selectionSort([33,2,52,106,73]));//[2,33,52,73,106]
console.log(selectionSort([13,5,22,99,11]));//[5,11,13,22,99]
