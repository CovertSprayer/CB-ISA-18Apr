
class Person {
    constructor(name, age, isAdult){
        this.name = name;
        this.age = age;
        this.isAdult = isAdult;
    }

    printName(){
        console.log(`Name: ${this.name}`);
    }

    // getter and setter
    get getAge(){
        return this.age;
    }

    set setAge(a){
        this.age = a;
    }


}


let p1 = new Person('Rohit', 20, true);

p1.printName()
console.log(p1.getAge);
p1.setAge = 25;

console.log(p1.getAge);


