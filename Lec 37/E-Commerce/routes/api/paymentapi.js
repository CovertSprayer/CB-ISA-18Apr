const express = require('express');
const router = express.Router();
const Razorpay = require('razorpay');
const { isLoggedIn } = require('../../middleware');
const Order = require('../../models/order');
const { validatePaymentVerification } = require('razorpay/dist/utils/razorpay-utils');
const { RAZORPAY_KEY_ID, RAZORPAY_KEY_SECRET } = process.env;


router.post('/order', isLoggedIn, async (req, res) => {
    const instance = new Razorpay({ key_id: RAZORPAY_KEY_ID, key_secret: RAZORPAY_KEY_SECRET });
    const { amount } = req.body;

    const options = {
        amount: parseInt(amount) * 100,  // amount in the smallest currency unit
        currency: "INR"
    };

    const order = await instance.orders.create(options);

    await Order.create({
        _id: order.id,
        user: req.user._id,
        amount,
    });

    res.json({
        success: true,
        order
    })

});

router.post('/payment-verify', async (req, res) => {
    const { razorpay_payment_id, razorpay_order_id, razorpay_signature } = req.body;

    const isValid = validatePaymentVerification({ "order_id": razorpay_order_id, "payment_id": razorpay_payment_id }, razorpay_signature, RAZORPAY_KEY_SECRET);

    if (isValid) {
        await Order.findByIdAndUpdate({ _id: razorpay_order_id }, { paymentStatus: true })
        res.json({ success: true, msg: 'Payment Successfull' });
    }
    else {
        res.json({ success: false, msg: 'Not a valid payment!' })
    }
})

module.exports = router;