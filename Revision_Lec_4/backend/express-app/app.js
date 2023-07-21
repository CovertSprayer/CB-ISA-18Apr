const express = require('express'); // it returns a function
const app = express();


// console.log(app);

app.get('/', (req, res)=>{
    res.send('you made a request at home page')
})

app.get('/login', (req, res)=>{
    res.send('this is login page')
})


app.listen(5000, ()=>{
    console.log('Server is up at port', 5000);
})

