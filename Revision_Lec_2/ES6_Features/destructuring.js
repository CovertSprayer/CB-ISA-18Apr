const person = {
    firstname: 'Dipak',
    lastname: 'Darade',
    age: 25,
    isAdult: true,
    address: 'Delhi, India'
}


const { firstname, lastname, age, address } = person;

// const firstname = person.firstname;
// const lastname = person.lastname;
// const age = person.age;
// const address = person.address;

console.log(`Hi! My name is ${firstname} ${lastname}, I am ${age} years old and I live in ${address}`)