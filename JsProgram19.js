//  Javascript program to print the elements of an array present on even position

function printElementsAtEvenPositions(arr) {
    for (let index = 1; index < array.length; index=index+2) {
       console.log(arr[index]);
    }
}
let array = [1, 6, 3, 9, 4, 2, 6, 3, 9];
printElementsAtEvenPositions(array);