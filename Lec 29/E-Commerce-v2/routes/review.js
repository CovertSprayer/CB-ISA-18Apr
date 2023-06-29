const express = require('express');
const Review = require('../models/review');
const Product = require('../models/product');
const router = express.Router();

router.post('/products/:productId/review', async (req, res) => {
    const { productId } = req.params;

    const newReview = new Review(req.body);
    await newReview.save();

    const product = await Product.findById(productId);
    product.reviews.push(newReview);

    await product.save();
    await newReview.save();


    res.redirect('back');
})



module.exports = router;