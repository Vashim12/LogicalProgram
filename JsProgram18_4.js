console.log(`Method : 4 => Using For Each Loop`)

function printArrayElementReverseForEach(arr) {
    arr.slice().reverse().forEach(function(element) {
        console.log(element);
    })
}
let array = [1, 2, 3, 4, 5];
printArrayElementReverseForEach(array);