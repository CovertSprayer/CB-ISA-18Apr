function outerFun(){
    let money = 150;

    function innerFun(){
        money++;
        let a = 10;

        function innerMostFun(){
            money++;
            a++;
            console.log(money);
        }
        return innerMostFun;
    }
    return innerFun;
}

let fun = outerFun();
let fun1 = fun();
fun1();    // output 152
fun1();   // output 153
