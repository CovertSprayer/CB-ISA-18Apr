
function movies(fun){

    let num = 10;
    fun();

    function jungleBook(){
        console.log("jungleBook");
    }

    function makkhi(){
        console.log("makkhi");
        return 10;
    }

    function mirjapur(){
        console.log("mirjapur");
    }

    return makkhi;
}

// // let x = movies();
// // console.log(x);

// let favMovie = movies();
// console.log(favMovie);
// // let a = favMovie();
// // console.log(a);
// console.log(favMovie());


let add = function(a,b){
    console.log(a+b);
}

movies(add);