//  Javascript program to find the frequency of each element in an array

let array = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4]
let frequency ={};
for (let index = 0; index < array.length; index++) {
    let elements = array[index];
    if (frequency[elements]) {
        frequency[elements]++;
    }else{
        frequency[elements] = 1;
    }
    
}
console.log(frequency);