function selectionSort(num){

	for (var i = 0 ; i < num.length ; i++){
		var indexAwal = i
		for (var j = i+1 ; j < num.length ; j++){
			if (num[j] < num[indexAwal]){
				indexAwal = j
			}
		}
		var temp = num[i]		
		num[i] = num[indexAwal]
		num[indexAwal]= temp
	}
	return num
}

console.log(selectionSort([33,2,52,106,73,1]))
console.log(selectionSort([13,5,22,99,11]))
console.log(selectionSort([5,1,1,1,11,1,4,3,2,1]))