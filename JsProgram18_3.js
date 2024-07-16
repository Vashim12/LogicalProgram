console.log(` Method : 3 => Using For Loop`)

function printArrayElementReverseFor(arr) {
    for (let i=arr.length-1; i>=0; i--) {
       console.log(arr[i]);
        
    }
}
let array = [1, 2, 3, 4, 5];
printArrayElementReverseFor(array);