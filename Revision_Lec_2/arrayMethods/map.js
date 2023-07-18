const numbers = [1, 2, 3, 4, 5, 6];

// const doubledNumbers = numbers.map(function(num){
//     return num*2;
// })

const doubledNumbers = numbers.map((num) => {
    return num * 2;
})

// const doubledNumbers = numbers.map(num => num*2)

// console.log(doubledNumbers);


// ------------------------ Q2
//  capitalize the first letter of each string 

const names = ['intjar', 'mahesh', 'sahil', 'rani'];

const capitalizedNames = names.map(function (name) {
    return name[0].toUpperCase() + name.slice(1);
})

// console.log(capitalizedNames);


// ----------------------------- Q3

const students = [
    { name: 'Yogesh', age: 24 },
    { name: 'Shreyance', age: 40 },
    { name: 'Rani', age: 23 },
    { name: 'Mahesh', age: 25 }
];

const studentNames = students.map((student)=>{
    return student.name;
});

const alphabetCounts = students.map((student)=>{
    return student.name.length;
})

console.log(studentNames);
console.log(alphabetCounts);
