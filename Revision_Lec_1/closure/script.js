

function outerFun(){

    let a = 200;
    function innerFun(){
        a++;
        console.log(a);
    }


    return innerFun;
}

let fun = outerFun();
fun();

let anotherFun = outerFun();
anotherFun();



