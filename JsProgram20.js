//  Javascript program to print the elements of an array present on Odd position

function printElementsAtOddPositions(arr) {
    for (let index = 0; index < arr.length; index=index+2) {
        console.log(arr[index]);
        
    }
}
let array = [1, 6, 3, 9, 4, 2, 6, 3, 9];
printElementsAtOddPositions(array);