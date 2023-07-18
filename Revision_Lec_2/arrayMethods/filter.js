
// filter out the even numbers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const evenNumbers = numbers.filter(function (number) {
    return number % 2 === 0;
})

console.log(evenNumbers);



// filter out the fruits which have length > 5
const fruits = ['mango', 'apple', 'banana', 'lichi', 'pineapple', 'grapes', 'dragon fruit', 'strawberry'];

const filteredFruits = fruits.filter(function(fruit){
    return fruit.length > 5;
});

console.log(filteredFruits);
