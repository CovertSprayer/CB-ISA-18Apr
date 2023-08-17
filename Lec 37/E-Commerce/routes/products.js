const express = require('express');
const router = express.Router();
const { validateProduct, isLoggedIn, isSeller, isProductAuthor } = require('../middleware');
const { showAllProducts, productForm, createProduct, showProduct, productEditForm, productUpdateForm, deleteProduct } = require('../contorllers/products');

router.route('/')
    .get(showAllProducts)
    .post(isLoggedIn, isSeller, validateProduct, createProduct)

router.get('/new', isLoggedIn, isSeller, productForm);

router.route('/:id')
    .get(showProduct)
    .patch(isLoggedIn, isSeller, validateProduct, isProductAuthor, productUpdateForm)
    .delete(isLoggedIn, isSeller, isProductAuthor, deleteProduct)

router.get('/:id/edit', isLoggedIn, isSeller, isProductAuthor, productEditForm);

module.exports = router;
