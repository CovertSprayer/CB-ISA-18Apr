

// function print(a){
//     let str = 'This is my function';
//     console.log(str);
//     console.log(a,b,c)
//     return str;
// }

// const newStr = print(2);
// console.log(newStr);
// console.log(print());


function movies(a){
    a();
    console.log(a);
    console.log('inside movies function');
    function avengers(){
        console.log('inside avengers function');
    }
    return avengers;
}

let b = function(){
    console.log('this function is assigned to parameter a')
}

let newFunction = movies(b);
console.log(newFunction);
newFunction();


function number(){
    // console.log('inside add function');

    let a = 10;

    return a;
}

// let newNumber = number();
// console.log(newNumber);







