
let arr = [2,3,4,5];
console.log(arr);

let sum = 0;
for(let num of arr){
    sum += num;
}

// console.log(sum);
// console.log(window); // not defined in node js
console.log(global);