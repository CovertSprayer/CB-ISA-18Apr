// function updatePersonAge(age, name, location='India'){
//     this.age = age;
//     this.name = name;
//     this.location = location;
// }

// let person1 = {
//     name: 'Harvinder Singh',
//     age: 23
// }

// let person2 = {
//     name: 'Rani Dangari',
//     age: 20
// }

// let x = updatePersonAge.bind(person2);
// x(22, 'abc');
// console.log(person2)

let item = {
    noOfItem: 0,
    incrementNoOfItem: function(){
        this.noOfItem++;
        console.log(this);
    }
}

const btn = document.querySelector('button');

// btn.addEventListener('click', item.incrementNoOfItem);
btn.addEventListener('click', item.incrementNoOfItem.bind(item));

btn.addEventListener('click', ()=>{
    console.log(item.noOfItem);
});
