const express = require('express');
const app = express();
const session = require('express-session');
const PORT = 5000;

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
}));    

app.get('/', (req, res) => {
    req.session.price = 10000;
    req.session.name = 'new User';
    console.log(req.session);
    res.send('Working Fine!');
});

app.listen(PORT, () => {
    console.log('Server is Up at Port ', PORT);
});