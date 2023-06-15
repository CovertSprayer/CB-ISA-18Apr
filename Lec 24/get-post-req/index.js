const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json()); //for parsing json data
app.use(express.urlencoded({ extended: true })); // for parsing URL as string data

app.get('/', (req,res)=>{
    res.render('index');
    // res.send('Working Fine!!');
})

app.get('/user', (req,res)=>{

    console.log(req.query);
    res.send('GET Request')
});

app.post('/user', (req,res)=>{

    console.log(req.body);
    res.send('POST Request')
})



app.listen(5000, ()=>{
    console.log('Server is Up at port', 5000);
})