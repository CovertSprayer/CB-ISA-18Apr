const express = require('express');
const app = express();

// console.log(app);

app.get('/', (req, res)=>{
    // console.log(req);
    res.send('this response is sent from our server');
})

app.get('/login', (req,res)=>{
    console.log(req.query);
    res.send(`you are trying to login with username ${req.query.username} and ${req.query.password} password`);
})

app.get('/nodemon', (req, res)=>{
    res.send('Hello from Nodemon');
})

app.get('/cat', (req, res)=>{
    res.send('meooowww');
})

app.get('/dog', (req, res)=>{
    res.send('woof woof!!!');
})

app.get('/challenge/:questionId', (req, res)=>{
    console.log(req.params)
    res.send(`You are searching a challenge with requestId: ${req.params.questionId}`)
})


app.listen(4000, ()=>{
    console.log('Server is up at port', 4000);
})