
function outerFun(){
    let money = 150;

    function innerFun(){
        money++;
        console.log(money);
    }

    return innerFun;
}


let fun1 = outerFun();
let fun = outerFun();

fun1(); // 151  151
fun1(); // 151  152
fun1(); // 151  153
fun(); // 151  154
fun(); // 151  155
fun1(); // 151  156