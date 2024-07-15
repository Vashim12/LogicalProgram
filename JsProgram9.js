//  Javascript program to find the second smallest number in an array

function findSecondSmallest(arr) {
    if (arr.length < 2) {
        return "Array doesn't have enough elements";
    }
    let smallest =arr[0];
    let secondSmallest = arr[1];
    if (secondSmallest < smallest) {
        [smallest,secondSmallest] = [secondSmallest, smallest];
    }
    for (let index = 2; index < array.length; index++) {
        if (arr[index]< smallest) {
            secondSmallest = smallest;
            smallest = arr[index];
        }else if (arr[index]< secondSmallest && arr[index]!= smallest){
           secondSmallest = arr[index];
    }
}
return secondSmallest 
}
let array = [5, 9, 7, 3, 8, 4, 1, 5, 2];
console.log("Second smallest number in array :", findSecondSmallest(array));