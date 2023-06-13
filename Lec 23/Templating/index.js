const express = require('express');
const app = express();
const path = require('path');


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')))

const todos = [
    'Go To Gym',
    'Buy Groceries',
    'Watch Movie',
    'Code some Files'
]

app.get('/', (req, res) => {
    res.render('home');
})

app.get('/random', (req, res) => {
    const randomNumber = Math.ceil(Math.random()*100);
    res.render('random', {
        title:'Random File',
        randomNumber:randomNumber
    });
})

app.get('/todos', (req, res)=>{
    res.render('todos', {todos});
})




app.listen(5000, () => {
    console.log('Server is Working Fine at Port ', 5000);
})