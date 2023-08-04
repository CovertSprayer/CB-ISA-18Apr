const express = require('express');
const Product = require('../models/product');
const Review = require('../models/review');
const router = express.Router();
const { validateProduct } = require('../middleware');


router.get('/products', async (req, res) => {
    try {
        // console.log(req.session);
        const products = await Product.find({});
        res.render('products/index', { products });
    } catch (e) {
        res.render('error', { err: e.message });
    }
});

router.get('/products/new', (req, res) => {

    try {
        res.render('products/new');
    }

    catch (e) {
        res.render('error', { err: e.message });
    }
})

router.post('/products', validateProduct, async (req, res) => {

    try {
        await Product.create(req.body);

        req.flash('success', 'Product added successfully!!');
        res.redirect('/products');
    }

    catch (e) {
        res.render('error', { err: e.message });
    }
})

router.get('/products/:id', async (req, res) => {


    try {
        const { id } = req.params;
        const product = await Product.findById(id).populate('reviews');
        res.render('products/show', { product });
    }
    catch (e) {
        res.render('error', { err: e.message });
    }
})

router.get('/products/:id/edit', async (req, res) => {


    try {
        const { id } = req.params;
        const product = await Product.findById(id);

        res.render('products/edit', { product });
    }

    catch (e) {
        res.render('error', { err: e.message });
    }
})

router.patch('/products/:id', validateProduct, async (req, res) => {


    try {
        const { id } = req.params;

        await Product.findByIdAndUpdate(id, req.body);

        req.flash('success', 'Saved your product successfully!');
        res.redirect(`/products/${id}`);
    }

    catch (e) {
        res.render('error', { err: e.message });
    }
})

router.delete('/products/:id', async (req, res) => {


    try {
        const { id } = req.params;
        const product = await Product.findById(id);

        // for (let reviewId of product.reviews) {
        //     await Review.findByIdAndDelete(reviewId);
        // }

        await Product.findByIdAndDelete(id);

        req.flash('success', 'Deleted your product successfully!');
        res.redirect(`/products`);
    }

    catch (e) {
        res.render('error', { err: e.message });
    }
})



module.exports = router;
