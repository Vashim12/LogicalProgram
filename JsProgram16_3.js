console.log(` Method : 3`);

function printDuplicates(arr) {
    let elementCount = {};
    let duplicates = [];
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (elementCount[element]) {
            elementCount[element]++;
        } else {
            elementCount[element] = 1;
        }
    }
    for (let element in elementCount){
        if (elementCount[element] > 1) {
            duplicates.push(element);
        }
    }
    if (duplicates.length > 0) {
        console.log("Duplicate elements:", duplicates);
    } else {
        console.log("No Duplicate elements found");
    }
}
let array = [2, 4, 8, 5, 6, 3, 2, 4, 6, 6];
printDuplicates(array);