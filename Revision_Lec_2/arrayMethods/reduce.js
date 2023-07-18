// const numbers = [1, 2, 3, 4, 5];

// const sum = numbers.reduce(function(accumulator,currValue){
//     return accumulator + currValue;
// }, 0)

// console.log(sum);


const numbers = [5, 3, -20, 6, -4, 5];

const maxNumber = numbers.reduce(function (accumulator, currValue) {
    return Math.max(accumulator, currValue);
}, -Infinity)

console.log(maxNumber);