const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const productRoutes = require('./routes/productRoutes');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));


mongoose.connect('mongodb://127.0.0.1:27017/myDB')
    .then(() => console.log('DB Connected!'))
    .catch(err => console.log(err))

// Routes
app.use(productRoutes);


app.get('/', (req, res) => {
    res.send('Working Fine!!');
})

app.listen(5000, () => {
    console.log('Server is up at port', 5000);
})