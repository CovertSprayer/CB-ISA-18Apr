const express = require('express');
const router = express.Router();
const { isLoggedIn } = require('../middleware');
const User = require('../models/user');

router.post('/user/:productId/add', isLoggedIn, async (req, res) => {
    const { productId } = req.params;
    const userId = req.user._id;

    const user = await User.findById(userId);

    const cartItem = user.cart.find((item) => {
        return item.productId.toString() === productId
    });

    if (cartItem) {
        cartItem.quantity++;
    }
    else {
        user.cart.push({ productId })
    }

    await user.save();

    req.flash('success', 'Item added to cart successfully!');
    res.redirect('back');
});

router.post('/user/:productId/remove', isLoggedIn, async (req, res) => {
    const { productId } = req.params;
    const userId = req.user._id;

    const user = await User.findById(userId);

    const cartItem = user.cart.find((item) => {
        return item.productId.toString() === productId
    });

    if (cartItem && cartItem.quantity > 1) {
        cartItem.quantity--;
    }

    await user.save();

    res.redirect('back');
});

router.delete('/user/:productId', isLoggedIn, async (req, res) => {
    const { productId } = req.params;
    const userId = req.user._id;

    const user = await User.findById(userId);
    
    const itemIndex = user.cart.findIndex((item)=>{
        return item.productId.toString() === productId;
    });

    if(itemIndex !== -1){
        user.cart.splice(itemIndex, 1);
    }

    await user.save();

    res.redirect('back');
});


router.get('/user/cart', isLoggedIn, async (req, res) => {
    const userId = req.user._id;
    const user = await User.findById(userId).populate('cart.productId');

    let totalAmount = 0;
    user.cart.forEach(item => {
        totalAmount += item.quantity * item.productId.price;
    });

    res.render('cart/index', { user, totalAmount })
});


module.exports = router;