const colors = require('colors');
const giveMeAJoke = require('give-me-a-joke');
const figlet = require('figlet');

figlet('JavaScript', (err, data)=>{
    if(err){
        console.log('Something went wrong!!')
        return;
    }
    console.log(data.green);
})

// giveMeAJoke.getRandomDadJoke(function(joke){
//     console.log(joke.rainbow);
// })

// console.log('Hello'.green)
// console.log('This is our first time using external package'.rainbow)    