const express = require('express');
const Product = require('../models/product');
const router = express.Router();


router.get('/products', async(req, res)=>{
    const products = await Product.find({});

    res.render('products/index', {products});
});

router.get('/products/new', (req,res)=>{
    res.render('products/new');
})

router.post('/products', async(req,res)=>{
    // console.log(req.body);
    await Product.create(req.body);
    res.redirect('/products');
})

router.get('/products/:id', async(req,res)=>{
    const {id} = req.params;
    const product = await Product.findById(id);
    res.render('products/show', {product});
})




module.exports = router;
