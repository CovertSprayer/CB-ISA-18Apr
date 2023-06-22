const express = require('express');
const Product = require('../models/product');
const router = express.Router();

// Display All the Products
router.get('/products', async (req, res) => {
    const products = await Product.find({});
    // res.send(products);
    res.render('index', { products });
})

// Get the form to create a new Product
router.get('/products/new', (req, res) => {
    res.render('new');
})

// to create new product
router.post('/products', async (req, res) => {
    console.log(req.body);
    // const {name, price, desc} = req.body;
    // await Product.create({name, price, desc});
    await Product.create(req.body);

    res.redirect('/products');
})

router.get('/products/:id', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.render('show', { product });
})

router.get('/products/:id/edit', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.render('edit', { product });
})

router.patch('/products/:id', async (req, res) => {
    const { id } = req.params;
    const { name, price, desc } = req.body;
    await Product.findByIdAndUpdate(id, { name, price, desc });

    res.redirect('/products');
})

router.delete('/products/:id', async (req, res) => {
    const {id} = req.params;
    await Product.findByIdAndDelete(id);

    res.redirect('/products');
})

module.exports = router;

