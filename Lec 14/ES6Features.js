// ---------------- destructuring

let person = {
    fullName: "Salman Khan",
    age: 56,
    height: 5.7
}

let {age, height, fullName} = person;

// console.log(fullName);
// console.log(age);
// console.log(height);

console.log('Full Name:', fullName)
console.log(`Full Name: ${fullName}, Age: ${age}, Height: ${height}`);



// --------------- spread operator 
let arr1 = [1,2,4,5,6];
let arr2 = [7,9, 10];
let arr3 = [11, 12,23]

// let arr = arr1.concat(arr2); // [1,2,4,5,6,7,9,10]
// let arr = arr2.concat(arr1); // [7,9,10,1,2,4,5,6]
let arr = arr1.concat(arr2, arr3); // [7,9,10,1,2,4,5,6]
// console.log(arr);
// console.log(arr1);

let newArr = [...arr1, ...arr2, ...arr3]; //spread operator
console.log(newArr);


// ------------------- rest operator

function sum(x, y, ...nums){ // nums = [3,4]
    let a = nums.reduce((total, num)=>{
        return total+num;
    },0)
    let z = x+y+a;
    console.log(z);
    console.log(nums);
}

sum(1,2,3,4,5,6,7,8);



