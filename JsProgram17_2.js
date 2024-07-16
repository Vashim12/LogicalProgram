console.log(` Method : 2 => Using While Loop`)

function printArrayElementsWhile(arr) {
    let i = 0;
    while (i < arr.length){
        console.log(arr[i]);
        i++;
    }
}
let array = [1, 2, 3, 4, 5];
printArrayElementsWhile(array);