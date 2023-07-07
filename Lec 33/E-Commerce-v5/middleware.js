const { productSchema, reviewSchema } = require('./schemas');


module.exports.isLoggedIn = (req, res, next)=> {
    if(!req.isAuthenticated()){

        req.flash('reject', 'You need to login first!')
        return res.redirect('/login');
    }
    next();
}


module.exports.validateProduct = (req, res, next) => {
    const { name, img, price, desc } = req.body;
    const { error } = productSchema.validate({ name, img, price, desc });

    if (error) {
        const msg = error.details.map((err) => err.message).join(',');
        return res.render('error', { err: msg });
    }
    next();
}

module.exports.validateReview = (req, res, next) => {
    const { rating, comment } = req.body;
    const { error } = reviewSchema.validate({ rating, comment });

    if (error) {
        const msg = error.details.map((err) => err.message).join(',');
        return res.render('error', { err: msg });
    }
    next();
}