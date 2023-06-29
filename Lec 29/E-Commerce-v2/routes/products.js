const express = require('express');
const Product = require('../models/product');
const Review = require('../models/review');
const router = express.Router();


router.get('/products', async (req, res) => {
    const products = await Product.find({});

    res.render('products/index', { products });
});

router.get('/products/new', (req, res) => {
    res.render('products/new');
})

router.post('/products', async (req, res) => {
    // console.log(req.body);
    await Product.create(req.body);
    res.redirect('/products');
})

router.get('/products/:id', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id).populate('reviews');
    console.log(product);
    res.render('products/show', { product });
})

router.get('/products/:id/edit', async (req, res) => {

    const { id } = req.params;
    const product = await Product.findById(id);

    res.render('products/edit', { product });
})

router.patch('/products/:id', async (req, res) => {
    const { id } = req.params;

    await Product.findByIdAndUpdate(id, req.body);
    res.redirect(`/products/${id}`);
})

router.delete('/products/:id', async (req, res) => {
    const { id } = req.params;

    const product = await Product.findById(id);

    for (let reviewId of product.reviews) {
        await Review.findByIdAndDelete(reviewId);
    }

    await Product.findByIdAndDelete(id);
    res.redirect(`/products`);
})



module.exports = router;
