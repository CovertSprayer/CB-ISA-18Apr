var arr = [2,'c', "Hello" ,4.66,6,7];
var arr1 = [1,2,3,4,5,6];

arr1[10] = 4;
console.log(arr1);
arr1[6] = 20;
console.log(arr1[6]);
console.log(arr1.length)
console.log(arr1);


// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);

// for(let i=0; i<arr.length; i++){
//     console.log(arr[i]);
// }

// for of loop
// for(let item of arr){
//     console.log(item);
// }

// for in loop
// for(let ind in arr){
//     console.log(arr[ind]);
// }

arr1.push(10); //[1,2,3,4,5,6,10]
arr1.push(102); //[1,2,3,4,5,6,10,102]
arr1.push(11); // [1,2,3,4,5,6,10,102,11]
arr1.pop(); // [1,2,3,4,5,6,10,102]


arr1.shift();
arr1.unshift(24);


// splice

var items = [1,2,3,4,5,6];
// console.log(items);


// items.splice(1); // [1]
// items.splice(3,2); // [ 1, 4, 5, 6 ]
// items.splice(1,2,40,60);
// items.splice(3,1);
// console.log(items[]);

// console.log(2.2/2);


var str = "We are Learning JS";
console.log(str);

let newStr = '';
for(let i=0; i<str.length; i++){
    newStr += str[i] + '-';
}

console.log(newStr);

let index = str.indexOf('arnold');
console.log(index);

let file = 'myfile.jpg';
console.log(file.split('.'));
console.log(str.split(' '));
var updatedStr = str.split(' ').pop();
console.log(updatedStr);

let format = file.split('.').pop();
console.log(format)

// jpg, jpeg, png
if(['jpeg','jpg', 'png'].indexOf(format) != -1){
    console.log("Done!")
}
else{
    console.log("Sorry! Nahi ho paega.")
}









