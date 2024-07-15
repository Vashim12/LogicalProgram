//  Javascript program to find the 2nd largest number in array

function findSecondLargest(arr) {
    if (arr.length < 2) {
      return "Array doesn't have enough elements"
    } 
    arr.sort(function(a,b) {
      return b - a;
    }) ;
    return arr[1];
  }
  let array = [5, 4, 6, 8, 3, 9, 1, 4]
  console.log("Second largest number in the array :", findSecondLargest(array));