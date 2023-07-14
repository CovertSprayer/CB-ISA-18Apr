
// a = 100;
// b = 50;
// c = a+b;

// console.log('value of a', a);
// console.log(`value of a ${a}, value of b ${b}, and the final output is ${c}`);


// function add(a,b){
//     console.log(`value of a: ${a}`);
//     console.log(`value of b: ${b}`);

//     let c = a+b;
//     return c;
// }


let add = (a,b) => {
    console.log(`value of a: ${a}`);
    console.log(`value of b: ${b}`);

    let c = a+b;
    return c;
}

// let multiply = (a,b) => {
//     return a*b;
// }

let multiply = (a,b) => a*b;


let ans = add(4,5);
console.log(`Summation of a and b is ${ans}`);


