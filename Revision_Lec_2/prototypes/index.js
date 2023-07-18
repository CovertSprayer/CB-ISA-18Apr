function Person(name, age){
    this.name = name;
    this.age = age;
}

Person.prototype.getDetails = function(){
    console.log(`Hi! my name is ${this.name} and I am ${this.age} years old`);
}

let p1 = new Person('Akshay', 23);
let p2 = new Person('Sumit', 25);

console.log(p1);
console.log(p2);

p1.getDetails();
p2.getDetails();