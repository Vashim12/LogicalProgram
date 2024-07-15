//  Javascript program to copy all elements from one array into another array

console.log(` Method : 1`);

let array1 = [1, 2, 3, 4, 5];
let newArray1 = [];
for (let index = 0; index < array1.length; index++) {
    newArray1.push(array1[index]);
    
}
console.log(newArray1);

console.log(` Method : 2`);

let array2 = [1, 2, 3, 4, 5];
let newArray2 = array2.slice();
console.log(newArray2);

console.log(` Method : 3`);

let array3 = [1, 2, 3, 4, 5];
let newArray3 = [...array3];
console.log(newArray3);