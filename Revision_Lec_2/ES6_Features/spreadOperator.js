let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9];
let arr3 = [10, 11, 12, 13]


// let arr = [1,2,3,4,5,6,7,8,9]

// let arr = arr1.concat(arr2, arr3);

let arr = [...arr1, ...arr2, ...arr3];
console.log(arr);

