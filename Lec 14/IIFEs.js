// ()
// (()=>{})
// (()=>{})();

let details = (()=>{
    let Person = {
        name:"vishal",
        age: 20,
        marks: 90,
    }

    function updateMarks(m){
        Person.marks = m;
    }

    updateMarks(80);

    function updateAge(a){
        Person.age = a;
    }

    return {
        "Person":Person,
        updateAge: updateAge
    }
})();

details.updateAge(25);
console.log(details.Person);


