const express = require('express');
const app = express();


app.use(express.urlencoded({ extended: true }));


app.use((req, res, next) => {
    // res.send('sending msg from "app.use"');
    console.log('sending msg from "app.use"');

    next();
})

app.use('/cat', (req, res) => {
    res.send('sending msg from "app.use", route:/cat');
})


const verify = (req, res, next) => {
    const { password } = req.body;
    if (password === '1234') {
        next();
    }
    else {
        res.send('Wrong Password!!')
    }
}



app.get('/dog', verify, (req, res) => {
    res.send('sending msg from "app.get", route:/dog')
})


app.post('/secret', verify, (req, res) => {
    return res.send(`My Secret is: "Nah!! I'm not telling you!"`)
})


app.listen(5000, () => {
    console.log('Server is Up at PORT', 5000);
})