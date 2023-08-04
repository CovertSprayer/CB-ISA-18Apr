const express = require('express');
const router = express.Router();
const User = require('./models/user');

router.get('/users', async (req, res) => {
    const users = await User.find({});
    res.render('index', { users });
});

router.get('/user/new', (req, res) => {
    res.render('new');
});

router.post('/users', async (req, res) => {
    const { name, age, email, contact, address, gender } = req.body;
    await User.create({ name, age, email, contact, address, gender });

    res.redirect('/users');
});

router.get('/users/:id', async (req, res) => {
    const { id } = req.params;
    const user = await User.findById(id);
    res.render('show', { user });
});

router.get('/users/:id/edit', async (req, res) => {
    const { id } = req.params;
    const user = await User.findById(id);

    res.render('edit', { user });
});

router.patch('/users/:id', async (req, res) => {
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


router.delete('/users/:id', async (req, res) => {
    const { id } = req.params;
    await User.findByIdAndDelete(id);

    res.redirect('/users');
});


module.exports = router;