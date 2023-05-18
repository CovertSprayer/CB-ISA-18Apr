
function updatePersonAge(age, name, location='India'){
    this.age = age;
    this.name = name;
    this.location = location;
}

let person1 = {
    name: 'Harvinder Singh',
    age: 23
}

let person2 = {
    name: 'Rani Dangari',
    age: 20
}


// updatePersonAge.call(person1, 25, 'Harvinderrr Singh', 'Banglore');
// updatePersonAge.apply(person1, [22, 'Harvinderrr', 'Banglore']);

// console.log(person1);
// console.log(person2);

// let person3 = {
//     name: 'Akshay Kumar',
//     age: 44
// }




// ------------------------- new keyword

function Car(color, wheels, seats){
    this.color = color;
    this.wheels = wheels;
    this.seats = seats;
}

let car1 = new Car('Black', 4, 2);
let car2 = new Car('yellow', 4, 8);


console.log(car1);
console.log(car2);
// console.log(window);



