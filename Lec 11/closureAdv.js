
function outerFun(){
    let money = 150;

    function innerFun(){
        money++;
        let a = 10;
        function innerMostFun(){
            money++;
            a++;
            // console.log(money);
            console.log(money, 'a: ', a);
        }

        return innerMostFun;
    }
    return innerFun;
}

let fun = outerFun();
let fun1 = fun();
let fun2 = fun();

 
fun1(); // 152
fun1(); // 154
fun1(); // 156
fun2(); // 152
fun2(); // 154
fun1(); // 158