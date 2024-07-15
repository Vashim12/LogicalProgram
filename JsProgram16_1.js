//  Javascript program to print the duplicate element of an array 

console.log(` Method : 1`);

function findDuplicates(array) {
    const duplicates = [];
    for (let index = 0; index < array.length; index++) {
       for(let j= index; j < array.length; j++) {
         if (array[index] == array[j] && !duplicates.includes(array[index])) {
            duplicates.push(array[index]);
         }
       }
       
        
    }
    return duplicates
}
const numbers = [2, 4, 8, 5, 6, 3, 2, 4, 6, 6];
const duplicateNumbers = findDuplicates(numbers);
console.log("Duplicate numbers:", duplicateNumbers);