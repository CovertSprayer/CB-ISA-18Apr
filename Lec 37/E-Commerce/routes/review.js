const express = require('express');
const Review = require('../models/review');
const Product = require('../models/product');
const router = express.Router();
const { validateReview, isLoggedIn } = require('../middleware');

router.post('/products/:productId/review', isLoggedIn, validateReview, async (req, res) => {
    const { productId } = req.params;

    const newReview = new Review(req.body);
    await newReview.save();

    const product = await Product.findById(productId);

    const newAvgRating = ((product.avgRating * product.reviews.length) + parseInt(req.body.rating)) / (product.reviews.length + 1);
    product.avgRating = parseFloat(newAvgRating.toFixed(1));


    product.reviews.push(newReview);

    await product.save();
    await newReview.save();


    res.redirect('back');
})



module.exports = router;