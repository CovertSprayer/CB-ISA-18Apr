const exp = require('constants');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const User = require('./models/user');
const session = require('express-session');
const bcrypt = require('bcrypt');


mongoose.connect('mongodb://127.0.0.1:27017/authDemoDB')
    .then(() => { console.log('DB connected!') })
    .catch(err => console.log(err));


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
}))

const checkLoggedIn = (req, res, next) => {
    if(req.session.user_id){
        return res.redirect('back');
    }
    next();
}


app.get('/', (req, res) => {
    if(!req.session.user_id){
        return res.redirect('/signin');
    }
    res.render('home');
})

app.get('/signin',checkLoggedIn, (req, res) => {
    res.render('signin');
})

app.get('/signup', checkLoggedIn, (req, res) => {
    res.render('signup');
})

app.post('/signup', async (req, res) => {
    const { username, email, password } = req.body;

    const user = await User.findOne({ username });

    if (user) {
        return res.send('User already Exist');
    }

    const hash = await bcrypt.hash(password, 10);

    await User.create({ username, email, password:hash });

    res.redirect('/signin');
})

app.post('/signin', async (req, res) => {
    const { username, password } = req.body;

    const user = await User.findOne({ username });

    if (user) {

        const match = await bcrypt.compare(password, user.password);
        if(match) {
            console.log(user);
            req.session.user_id = user._id;
            return res.render('home', {user});
        }

        return res.send('Invalid Credentials');
        
    }

    return res.send('User not Exist, Sign up Please!!');


})

app.get('/signout', (req, res)=>{
    req.session.destroy();
    res.redirect('/signin');
})



app.listen(5000, () => {
    console.log('Server is up at port', 5000);
})