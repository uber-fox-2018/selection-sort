
function selection(array) {

    for (var i = 0; i < array.length; i++) {
        //set min to the current iteration of i
        var min = i;
        for (var j = i + 1; j < array.length; j++) {
            if (array[j] < array[min]) {
                min = j;
            }
        }
        var temp = array[i];
        array[i] = array[min];
        array[min] = temp;
    }
    return array;

}


console.log(selection([33, 2, 52, 106, 73])
);

console.log(selection([13, 5, 22, 99, 11]));

