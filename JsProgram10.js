//  Javascript program to find the smallest number in an array

function findSmallestNumber(arr) {
    if (arr.length == 0) {
        return "Array is empty";
    }
    let smallest = arr[0];
    for (let index = 1; index < array.length; index++) {
        if (arr[index] < smallest) {
            smallest= arr[index]
        }
        
    }
    return smallest;
}
let array = [4, 7, 3, 6, 8, 9, 2, 5, 1];
console.log("Smallest number in the array:", findSmallestNumber(array));