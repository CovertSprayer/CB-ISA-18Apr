const express = require('express');
const router = express.Router();
const User = require('../models/user');
const passport  = require('passport');

router.get('/login', (req, res)=>{
    res.render('auth/login');
});

router.get('/signup', (req, res)=>{
    res.render('auth/signup');
});

router.post('/signup', async (req, res)=>{
    const {username, email, role, password} = req.body;
    const user = new User({username, email, role});
    await User.register(user, password);

    req.flash('success', 'Please LogIn, you are successfully registered!');
    res.redirect('/login');
});

router.post('/login', 
    passport.authenticate('local', {
        failureRedirect: '/login',
        failureFlash:true
    }), 
    
    (req, res)=>{
    req.flash('success', `Welcome! ${req.user.username}`);
    res.redirect('/products');
});

router.get('/logout', (req, res)=>{
    req.logout(function(err) {
        if (err) { return next(err); }


        req.flash('success', 'Logged Out successfully!');
        res.redirect('/products');
    });
})

module.exports = router;