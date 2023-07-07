const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const ejsMate = require('ejs-mate');
const methodOverride = require('method-override');
const session = require('express-session');
const connectFlash = require('connect-flash'); 
const passport = require('passport');
const LocalStrategy = require('passport-local');
const User = require('./models/user');
const PORT = 5000;


mongoose.connect('mongodb://127.0.0.1:27017/e-commerce')
    .then(() => { console.log('DB connected!') })
    .catch(e => console.log(e));

const sessionConfig = {
    secret: 'kuchSamjhNhiAara',
    resave: false,
    saveUninitialized: true,
}


app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(methodOverride('_method'))
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

app.use(session(sessionConfig));
app.use(connectFlash());

app.use((req,res,next)=>{
    app.locals.currentUser = req.user;
    res.locals.success = req.flash('success');
    res.locals.reject = req.flash('reject');
    next();
})


// Initializing middleware for passport
app.use(passport.initialize());
app.use(passport.session());

// telling passport to check for username and password using authenticate method provided by the passport-local-mongoose
passport.use(new LocalStrategy(User.authenticate()));

// this tells passport to use passport-local-mongoose methods to add or remove user from session
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());




// --------------- routes
const productRoutes = require('./routes/products');
const reviewRoutes = require('./routes/review');
const authRoutes = require('./routes/auth');

app.use(productRoutes);
app.use(reviewRoutes);
app.use(authRoutes);

app.get('/', (req, res) => {
    res.send('Working Fine!!');
})

app.listen(PORT, () => {
    console.log('Server is Up at port ', PORT);
})



