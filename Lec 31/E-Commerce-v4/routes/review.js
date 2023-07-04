const express = require('express');
const Review = require('../models/review');
const Product = require('../models/product');
const router = express.Router();
const { validateReview } = require('../middleware');

router.post('/products/:productId/review', validateReview, async (req, res) => {
    const { productId } = req.params;

    const newReview = new Review(req.body);
    await newReview.save();

    const product = await Product.findById(productId);

    const newAvgRating = ((product.avgRating * product.reviews.length) + parseInt(req.body.rating)) / (product.reviews.length + 1);
    product.avgRating = parseFloat(newAvgRating.toFixed(1));


    product.reviews.push(newReview);

    await product.save();
    await newReview.save();


    req.flash('success', 'Added your review successfully!');

    res.redirect('back');
})



module.exports = router;