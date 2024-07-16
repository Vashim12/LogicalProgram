console.log(` Method : 2 => Using Do While Loop`)

function printArrayElementReverseDoWhile(arr) {
    let i = arr.length-1;
    if (i<0) return;
    do {
        console.log(arr[i]);
        i--;
    } while (i>=0);
} 
let array = [1, 2, 3, 4, 5];
printArrayElementReverseDoWhile(array);