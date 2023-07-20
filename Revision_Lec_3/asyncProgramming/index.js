


console.log('START');

console.log(1);
console.log(2);
console.log(3);

// setTimeout(function(){
//     console.log(4);
//     console.log(5);
// }, 0);


const id = setInterval(() => {
    console.log(4);
    console.log(5);
}, 2000);

setTimeout(() => {
    clearInterval(id)
}, 9000);


console.log(6);
console.log(7);

console.log('END');

