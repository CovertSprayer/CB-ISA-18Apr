
let a = 40;
let b = '40';

console.log(a === b);


const arr = [1,2,3,4,5,6,7,8,9,10];

const vehicles = [
    {
        wheels: 4,
        color: 'White'
    },
    {
        wheels: 2,
        color: 'black'
    },
    {
        wheels: 8,
        color: 'green'
    },
    {
        wheels: 2,
        color: 'red'
    },
    {
        wheels: 4,
        color: 'red'
    },
    {
        wheels: 3,
        color: 'red'
    },
    {
        wheels: 1,
        color: 'orange'
    },
    {
        wheels: 2,
        color: 'black'
    },
    {
        wheels: 12,
        color: 'grey'
    },
    {
        wheels: 10,
        color: 'pink'
    },
    {
        wheels: 4,
        color: 'blue'
    },
]


//------------------------- map function

const newArr = arr.map((num, index)=>{
    // console.log(num, index);
    return {num: num, updatedVal: num*2, index:index};
})

// console.log(newArr);


//----------------------- filter function


const filteredArr = arr.filter((num, ind)=>{
    return num % 2 === 0;
})

const vehiclesAfterFilter = vehicles.filter(vehicle=>vehicle.color === "red")

// console.log(vehiclesAfterFilter);
// console.log(filteredArr);


// --------------- reduce function

const arr2 = [1,2,3,4,5,6,7,8,9,10];

const totalAmount = arr2.reduce((total, num)=>{
    return total + num;
},10)

console.log(totalAmount);






