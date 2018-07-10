function selectionSort(num) {
  for (let i = 0; i < num.length; i++) {
    debugger
    let idxKecil = i;
    for (let j = i + 1; j < num.length; j++) {
      if (num[j] !== undefined) {
        if (num[j] < num[idxKecil]) {
          idxKecil = j;
        }
      }
    }
    let awal = num[i];
    num[i] = num[idxKecil];
    num[idxKecil] = awal;
  }
  return num;
}

console.log(selectionSort([33, 2, 52, 106, 73]));
console.log(selectionSort([13, 5, 22, 99, 11]));
