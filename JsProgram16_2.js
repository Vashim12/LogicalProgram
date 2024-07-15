console.log(` Method : 2`);

function findDuplicatesOptimized(array) {
    const duplicates = [];
    const frequencyMap = {};
    for (let index = 0; index < array.length; index++) {
        const elements = array[index];
        if (frequencyMap[elements]) {
            if (!duplicates.includes(elements)) {
                duplicates.push(elements);
            }
        } else {
            frequencyMap[elements] = true;
        }
    }
    return duplicates
}
const numbers = [2, 4, 8, 5, 6, 3, 2, 4, 6, 6];
const duplicateNumbers = findDuplicatesOptimized(numbers);
console.log("Duplicate Numbers:", duplicateNumbers);