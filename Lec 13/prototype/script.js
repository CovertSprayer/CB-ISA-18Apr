
// Student1 = {
//     name: 'Salman',
//     age: 24,
//     isAdult: true
// }

// Student2 = {
//     name: 'Radha',
//     age: 24,
//     isAdult: true
// }

// Student3 = {
//     name: 'Rakesh',
//     age: 24,
//     isAdult: true
// }

// Student4 = {
//     name: 'Rajat',
//     age: 24,
//     isAdult: true
// }

// function Student(name, age, isAdult){
//     this.name = name;
//     this.age = age;
//     this.isAdult = isAdult;
// }

// Student.prototype.details = function(){
//     console.log(`Hi! My name is ${this.name} and my age is ${this.age}`);
// }


// let S1 = new Student('Rajat', 20, true);
// let S2 = new Student('Salman', 24, true);


let obj = {
    a:10,
    b:true
}

let obj1 = Object.create(obj);
let obj2 = Object.create(obj1);




