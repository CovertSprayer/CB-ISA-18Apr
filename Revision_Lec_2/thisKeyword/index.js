
function updatePerson(name, age=25){
    this.name = name;
    this.age = age;
}

let person1 = {
    name:'Bhola',
    age:24
}

let person2 = {
    name:'Raghav',
    age:26
}

const person1_details = ['Bholaaaa', 25000000];
updatePerson.apply(person1, person1_details);
// updatePerson(person1, 'Bholaaaaa', 25);
updatePerson.call(person2,"gopi",23)

console.log(person1);
console.log(person2);