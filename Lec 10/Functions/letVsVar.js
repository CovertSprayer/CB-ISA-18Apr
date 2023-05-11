

// error let kabhi hoist nhi hote
// console.log(a);
// let a = 10;


// function fun(){
//     console.log(x);
//     if(true){
//         var x = 10;
//     }
//     else{
//         var y = 20;
//     }
//     console.log(y);

// }

// fun();


// function fun(v){
//     let x = 20;
//     console.log(x);
//     if(v > 10){
//         let x = 10;
//         console.log(x);
//     }
//     else{
//         let y = 20;
//     }
//     console.log(x);
//     console.log(y);

// }

// fun(15);


function fun(v){
    var x = 20;
    console.log(x);
    if(v > 10){
        var x = 10;
        console.log(x);
    }
    else{
        var y = 20;
    }
    console.log(x);
    console.log(y);

}

fun(15);



