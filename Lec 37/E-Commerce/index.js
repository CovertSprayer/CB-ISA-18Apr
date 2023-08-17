require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const ejsMate = require('ejs-mate');
const methodOverride = require('method-override');
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const User = require('./models/user');
const MongoStore = require('connect-mongo');
const PORT = process.env.PORT || 5000;
const db_url = process.env.DB_URL || 'mongodb://127.0.0.1:27017/e-commerce';

mongoose.connect(db_url)
    .then(() => { console.log('DB connected!') })
    .catch(e => console.log(e));


app.engine('ejs', ejsMate);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const secret = process.env.SECRET;

app.use(session({
    store: MongoStore.create({mongoUrl: db_url}),
    secret,
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 7 * 24 * 60 * 60 * 1000
    }
}));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
    res.locals.currentUser = req.user;
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    next();
})

// --------------- routes
const productRoutes = require('./routes/products');
const reviewRoutes = require('./routes/review');
const authRoutes = require('./routes/auth');
const cartRoutes = require('./routes/cart');

//  ----------------  APIs
const productAPI = require('./routes/api/productapi');
const paymentAPI = require('./routes/api/paymentapi');

app.use('/products', productRoutes);
app.use(reviewRoutes);
app.use(authRoutes);
app.use(cartRoutes);
app.use(productAPI);
app.use(paymentAPI);

app.get('/', (req, res) => {
    res.render('home');
})

app.listen(PORT, () => {
    console.log('Server is Up at port ', PORT);
})



