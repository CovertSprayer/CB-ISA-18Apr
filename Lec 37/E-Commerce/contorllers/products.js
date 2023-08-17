const Product = require("../models/product");

module.exports.showAllProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.render('products/index', { products });
    } catch (e) {
        res.render('error', { err: e.message });
    }
}

module.exports.productForm = (req, res) => {
    try {
        res.render('products/new');
    }
    catch (e) {
        res.render('error', { err: e.message });
    }   
}

module.exports.createProduct = async (req, res) => {
    try {
        await Product.create({...req.body, author:req.user._id});

        req.flash('success', 'Product added successfully!!');
        res.redirect('/products');
    }
    catch (e) {
        res.render('error', { err: e.message });
    }
}

module.exports.showProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id).populate('reviews');
        res.render('products/show', { product });
    }
    catch (e) {
        res.render('error', { err: e.message });
    }
}

module.exports.productEditForm = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);

        res.render('products/edit', { product });
    }
    catch (e) {
        res.render('error', { err: e.message });
    }
}

module.exports.productUpdateForm = async (req, res) => {
    try {
        const { id } = req.params;
        await Product.findByIdAndUpdate(id, req.body);

        req.flash('success', 'Saved your product successfully!');
        res.redirect(`/products/${id}`);
    }
    catch (e) {
        res.render('error', { err: e.message });
    }
}

module.exports.deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        await Product.findByIdAndDelete(id);

        req.flash('success', 'Deleted your product successfully!');
        res.redirect(`/products`);
    }
    catch (e) {
        res.render('error', { err: e.message });
    }
}