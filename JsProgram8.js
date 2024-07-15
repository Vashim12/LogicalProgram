//  Javascript program to find the largest number in array

function findLargestNumber(arr) {
    if (arr.length == 0) {
        return "array is empty";
    }
    let largest = arr[0];
    for (let index = 1; index < array.length; index++) {
        if (arr[index] > largest) {
            largest= array[index];
        }
        
    }
    return largest;
}
let array = [5, 4, 6, 8, 3, 9, 1, 4]
console.log("Largest number in array:", findLargestNumber(array));