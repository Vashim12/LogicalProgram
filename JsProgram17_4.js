console.log(` Method : 4 => Using ForEach Loop`)

function printArrayElementsForEach(arr) {
    arr.forEach(function (element) {
        console.log(element);
    })
}
let array = [1, 2, 3, 4, 5];
printArrayElementsForEach(array);