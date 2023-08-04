const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const methodOverride = require('method-override');
const User = require('./models/user');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

mongoose.connect('mongodb://127.0.0.1:27017/ISA-DB')
    .then(() => { console.log('ISA-DB connected') })
    .catch((err) => { console.log(err) });


app.get('/', (req, res) => {
    res.send('Working Fine!');
});

const userRoutes = require('./routes/user');

app.use(userRoutes);

const PORT = 5000;
app.listen(PORT, () => {
    console.log('Server is up at port', PORT);
})