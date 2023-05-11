// functions are also the data types in js
// similar to string, number, boolean

// function add(a=2,b=8){
//     console.log(a+b);
//     return a+b;
// }

// add(x,y);

var x = 10;
var y = 20;



var addition = function add(a,b){
    return a+b;
}

console.log(x);

// addition vs addition();
console.log(addition);
console.log(addition(2,5));
// add(4,5); // won't run

var sub = function(a,b){
    return a-b;
}

console.log(sub(4,2));




