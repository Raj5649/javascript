// Get the sum of two arrays
let arr_1 = [3, 5, 22, 5, 7, 2, 45, 75, 89, 21, 2]; 
let arr_2 = [9, 2, 42, 55, 71, 22, 4, 5, 90, 25, 26]; 
let sum_1 = arr_1.reduce((acc, num) => acc + num, 0);
let sum_2 = arr_2.reduce((acc, num) => acc + num, 0);
console.log(`${sum_1} + ${sum_2} = ${sum_1 + sum_2}`);