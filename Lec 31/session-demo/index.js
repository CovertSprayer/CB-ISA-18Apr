const express = require('express');
const app = express();
const session = require('express-session');

app.use(session({
    secret: 'thisIsSecret',
    resave: false,
    saveUninitialized: true
}))


app.get('/viewVisitCount', (req,res)=>{
    if(req.session.count){
        req.session.count += 1;
    }
    else{
        req.session.count = 1;
    }

    res.send(`You visited this page ${req.session.count} time(s)`);
})


app.get('/', (req, res) => {

    res.send('Working Fine!!');
});


app.get('/setusername', (req, res) => {
    req.session.username = 'Amit';

    res.send('Session stored!!');
})

app.get('/greet', (req, res) => {
    const { username } = req.session;

    res.send(`Hello ${username}`);
})



app.listen(5000, (req, res) => {
    console.log('Server is up at PORT', 5000);
})