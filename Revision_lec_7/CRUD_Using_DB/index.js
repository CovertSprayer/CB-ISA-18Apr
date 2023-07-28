const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const methodOverride = require('method-override');
const User = require('./models/user')

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

app.get('/users', async (req, res) => {
    const users = await User.find({});
    res.render('index', { users });
});

app.get('/user/new', (req, res) => {
    res.render('new');
});

app.post('/users', async (req, res) => {
    const { name, age, email, contact, address, gender } = req.body;
    await User.create({ name, age, email, contact, address, gender });

    res.redirect('/users');
});

app.get('/users/:id', async (req, res) => {
    const { id } = req.params;
    const user = await User.findById(id);
    res.render('show', { user });
});

app.get('/users/:id/edit', async (req, res) => {
    const { id } = req.params;
    const user = await User.findById(id);

    res.render('edit', { user });
});

app.patch('/users/:id', async (req, res) => {
    const { id } = req.params;
    const { name, age, email, contact, address, gender } = req.body;

    const user = await User.findById(id);

    user.name = name;
    user.age = age;
    user.email = email;
    user.contact = contact;
    user.address = address;
    user.gender = gender;

    await user.save()

    res.redirect('/users');
})


app.delete('/users/:id', async (req, res) => {
    const { id } = req.params;
    await User.findByIdAndDelete(id);

    res.redirect('/users');
})



const PORT = 5000;
app.listen(PORT, () => {
    console.log('Server is up at port', PORT);
})