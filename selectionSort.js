function selectionSort(input){
   let arr = []
   while (input.length !== 0){
    var index = 0
    var min = input[0]
       for (let i = 0; i < input.length; i++){ 
            if (min>input[i]){
                min = input[i]
                index = i
            }
       }
        arr.push(min)
        input.splice(index,1)
   }
   return arr
}

console.log(selectionSort([13,5,22,99,11]))