//  Javascript program to print Odd and Even number from an array

function printEvenOddNumbers(arr) {
    let oddNumbers = [];
    let evenNumbers = [];
    for (let index = 0; index < array.length; index++) {
        if (arr[index] % 2 == 0) {
            evenNumbers.push(arr[index]);
        } else {
            oddNumbers.push(arr[index]);
        }
        
    }
    console.log("Even Numbers:", evenNumbers);
    console.log("Odd Numbers:", oddNumbers);
}
let array = [4, 6, 2, 5, 8, 1, 9, 3, 7];
console.log("Original array:", array);
printEvenOddNumbers(array);