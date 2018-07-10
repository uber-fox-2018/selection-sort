function selectionSort(num){

    for(let i = 0; i < num.length; i++){
      var nilaiTukar = num[i] //13
      for(let j = i; j < num.length; j++){
        if(nilaiTukar > num[j]){
          nilaiTukar = num[j] 
        }
      }
      num[num.indexOf(nilaiTukar)] = num[i]
      num[i] = nilaiTukar
    }
    return num
   
   }
     
// console.log(selectionSort([33, 2, 52, 106, 73]))
console.log(selectionSort([13, 5, 22, 99, 11]))
   

/*
// my way
function selectionSort(deretAngka){

for(var i = 0; i < deretAngka.length; i++){
    for(var j = 0; j < deretAngka.length; j++){
        if(deretAngka[j] > deretAngka[j+1]){
            var tmp = deretAngka[j]
            deretAngka[j] = deretAngka[j+1]
            deretAngka[j+1] = tmp
        }
    }
} 

    return deretAngka

}
  
console.log(selectionSort([33, 2, 52, 106, 73]))
console.log(selectionSort([13, 5, 22, 99, 11]))
*/