const express = require('express');
const router = express.Router();
const User = require('../models/user');
const passport = require('passport');

router.get('/check', (req,res)=>{
    console.log(req.user);
    res.send('done!!')
})

// router.get('/fakeuser', async (req,res)=>{
//     const user = {
//         email:'shreyance@gmail.com',
//         username:'shreyance'
//     }

//     const newUser = await User.register(user, '1234');

//     res.send(newUser);
// })

router.get('/login', (req, res) => {
    res.render('auth/login');
})

router.get('/signup', (req, res) => {
    res.render('auth/signup');
})


router.post('/signup', async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const user = new User({ username, email });
        const newUser = await User.register(user, password);

        req.login(newUser, function(err){
            if(err){
                return next(err)
            }

            req.flash('success', 'Welcome, You are Registered Successfully!');
            res.redirect('/products');
        });

    } catch (e) {
        console.log(e.message);
        req.flash('reject', e.message);
        res.redirect('/signup');
    }
});


router.post('/login',
    passport.authenticate(
        'local',
        {
            failureRedirect: '/login',
            failureFlash: true
        }
    ),
    (req, res) => {
        req.flash('success', `Welcome ${req.user.username}!`);
        console.log('logged in successfully');
        res.redirect('/products');
    })


router.get('/logout', (req, res, next) => {
    
    req.logout(function (err) {
        if (err) { return next(err); }

        req.flash('success', 'GoodBye!!');
        console.log('You have Logged Out!');
        res.redirect('/products');
    });
})

module.exports = router;