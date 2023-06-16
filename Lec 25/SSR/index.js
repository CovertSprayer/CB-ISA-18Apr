const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({extended:true}));

const Todos = ["Gaming", "Watching Movies", "Coding", "Dancing"];

app.get('/', (req, res)=>{
    res.send('Working Fine!!!');
})

app.get('/todos', (req,res)=>{
    res.render('todos', {Todos});
})

app.post('/todos', (req,res)=>{
    const {todo} = req.body;
    Todos.push(todo);
    res.redirect('/todos');
})

app.listen(5000, ()=>{
    console.log('Server(SSR) is Up at PORT', 5000);
})