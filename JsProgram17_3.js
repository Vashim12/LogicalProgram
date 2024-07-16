console.log(` Method : 2 => Using Do While Loop`)

function printArrayElementsDoWhile(arr){
        let i = 0;
        do {
            console.log(arr[i]);
            i++;
        } while (i<arr.length);
}
    
let array = [1, 2, 3, 4, 5];
printArrayElementsDoWhile(array);