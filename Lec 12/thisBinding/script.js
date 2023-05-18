console.log(this);  // this -> window object

function add(){
    console.log(this);  // this -> window object
}

add();


let obj = {
    name:'Coding blocks',
    location: ['pitampura', 'noida'],
    fun: function(){
        console.log(this); // this -> obj object
    }
}

obj.fun();


