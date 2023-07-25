const express = require('express');
const app = express();
const path = require('path');



app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))


app.get('/', (req, res)=>{
    // {name: 'Bhola Yadav', myAge:25}
    console.log(req.query);
    res.render('home', req.query);
});






app.get('/learningParams/:temp', (req, res) => {

    console.log(req.params);

    const { temp } = req.params;
    console.log(temp);

    res.send('Working Fine!!')
});

app.get('/learningQuery', (req, res) => {
    console.log(req.query);
    const { name, age } = req.query;
    console.log(name);
    console.log(age);
    res.send('You are at another route');
})



const PORT = 5000;
app.listen(PORT, () => {
    console.log('Server is up at port', PORT);
})