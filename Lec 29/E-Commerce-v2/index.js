const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const ejsMate = require('ejs-mate');
const methodOverride = require('method-override');
const PORT = 5000;

app.engine('ejs', ejsMate);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(methodOverride('_method'))
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }))

mongoose.connect('mongodb://127.0.0.1:27017/e-commerce')
    .then(() => { console.log('DB connected!') })
    .catch(e => console.log(e));


// --------------- routes
const productRoutes = require('./routes/products');
const reviewRoutes = require('./routes/review');

app.use(productRoutes);
app.use(reviewRoutes);

app.get('/', (req, res) => {
    res.send('Working Fine!!');
})

app.listen(PORT, () => {
    console.log('Server is Up at port ', PORT);
})



