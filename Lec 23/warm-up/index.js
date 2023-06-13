const express = require('express');
const app = express();





app.get('/', (req,res)=>{
    res.send('Working Fine!')
})

app.get('/getData', (req, res)=>{
    const data = ['vivek', 'Avinash', 'Yogesh', 'Shreya'];
    res.send(data);
})

app.get('/give-json', (req, res)=>{
    const movies = [
        {
            id:1,
            name: 'Don',
            imdb: 8,
            cast:['Shahrukh Khan', 'Priyanka Chopra']
        },

        {
            id:2,
            name:'Ek Tha Tiger',
            imdb: 9,
            cast: ['Salman Khan', 'Katrina Kaif']
        },

        {
            id:2,
            name:'Ek Tha Tiger 2',
            imdb: 7,
            cast: ['Salman Khan', 'Katrina Kaif']
        },

    ]

    res.status(200).json(movies);
})



app.get('/r/:subreddit',(req, res)=>{
    console.log(req.params)
    res.send(`this is your sub-reddit ${req.params.subreddit}`)
})

app.get('/user/:username/:password',(req, res)=>{
    console.log(req.query)
    console.log(req.params);
    res.send(`username: ${req.params.username}, password: ${req.params.password}`)
})





app.get('*', (req, res)=>{
    res.status(500).send('<h1><em>404 Page Not found!!</em></h1>');
})



app.listen(5000, (req, res)=>{
    console.log('Server is Up at port:', 5000);
})



