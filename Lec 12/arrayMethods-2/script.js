
let arr = [1,2,4,5,6,7,8,9];

// ----------------- find

// let num = arr.find((val)=>{
//     return val===3;
// })




// ----------------- some

// let num = arr.some((val)=>{
//     // return val % 2 == 0;
//     return val > 9;
// })


let arr1 = [2,4,6,8,10];

// ----------------- every

// let num = arr1.every((val)=>{
//     // return val%2===0;
//     return val > 4;
// })

let arr2 = [9,1,5,2,3,8,10];

// ----------------- sort
let num = arr2.sort((a,b)=>{
    // return a-b;
    return b-a;
});

console.log(num);